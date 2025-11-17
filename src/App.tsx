import React, { useState, useEffect } from 'react';
import './App.css';
import { GanttChart } from './components/GanttChart';
import { TaskList } from './components/TaskList';
import { sampleTasks } from './data/sampleData';
import type { Task } from './types/Task';

// Power Apps SDKをグローバルオブジェクトから取得
declare global {
  interface Window {
    PowerAppsSdk: any;
    parent: any;
  }
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [userInfo, setUserInfo] = useState<{ displayName?: string; email?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializePowerApps = async () => {
      console.log('App initialized - running as standalone');
      setIsInitialized(true);
    };

    initializePowerApps();
  }, []);

  if (!isInitialized) {
    return (
      <div className="app-container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{ 
            fontSize: '1.5rem', 
            color: '#0078d4',
            fontWeight: 600
          }}>
            Power Platform 認証中...
          </div>
          <div style={{ 
            fontSize: '1rem', 
            color: '#605e5c'
          }}>
            アプリケーションを初期化しています
          </div>
          {error && (
            <div style={{ 
              fontSize: '0.875rem', 
              color: '#d83b01',
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#fed9cc',
              borderRadius: '4px',
              maxWidth: '600px'
            }}>
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>プロジェクト管理 - ガントチャート</h1>
        <p>ITシステム導入プロジェクト タスク管理</p>
        {userInfo?.displayName && (
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.9 }}>
            ユーザー: {userInfo.displayName}
          </p>
        )}
      </header>
      
      <main className="app-main">
        <div className="content-wrapper">
          <section className="gantt-section">
            <h2>ガントチャート</h2>
            <GanttChart 
              tasks={tasks} 
              onTaskSelect={setSelectedTask}
              selectedTask={selectedTask}
            />
          </section>
          
          <section className="task-list-section">
            <h2>タスク一覧</h2>
            <TaskList 
              tasks={tasks} 
              onTaskSelect={setSelectedTask}
              selectedTask={selectedTask}
            />
          </section>
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Microsoft 365 / Office 製品導入プロジェクト</p>
      </footer>
    </div>
  );
}

export default App;