import React from 'react';
import type { Task } from '../types/Task';
import './TaskList.css';

interface TaskListProps {
  tasks: Task[];
  onTaskSelect: (task: Task) => void;
  selectedTask: Task | null;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskSelect, selectedTask }) => {
  // ステータスラベル
  const getStatusLabel = (status: Task['status']) => {
    switch (status) {
      case 'not-started': return '未着手';
      case 'in-progress': return '進行中';
      case 'completed': return '完了';
      case 'delayed': return '遅延';
    }
  };

  // ステータスクラス
  const getStatusClass = (status: Task['status']) => {
    return `status-badge status-${status}`;
  };

  // 日付フォーマット
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <div className="task-list">
      <div className="task-list-header">
        <div className="task-list-header-cell task-col-name">タスク名</div>
        <div className="task-list-header-cell task-col-category">カテゴリ</div>
        <div className="task-list-header-cell task-col-assignee">担当者</div>
        <div className="task-list-header-cell task-col-dates">期間</div>
        <div className="task-list-header-cell task-col-progress">進捗</div>
        <div className="task-list-header-cell task-col-status">状態</div>
      </div>
      
      <div className="task-list-body">
        {tasks.map(task => (
          <div 
            key={task.id}
            className={`task-list-row ${selectedTask?.id === task.id ? 'selected' : ''}`}
            onClick={() => onTaskSelect(task)}
          >
            <div className="task-list-cell task-col-name">
              <div className="task-name-main">{task.name}</div>
              {task.description && (
                <div className="task-description">{task.description}</div>
              )}
            </div>
            <div className="task-list-cell task-col-category">
              <span className="category-badge">{task.category}</span>
            </div>
            <div className="task-list-cell task-col-assignee">
              {task.assignee || '-'}
            </div>
            <div className="task-list-cell task-col-dates">
              <div className="date-range">
                <div>{formatDate(task.startDate)}</div>
                <div className="date-separator">〜</div>
                <div>{formatDate(task.endDate)}</div>
              </div>
            </div>
            <div className="task-list-cell task-col-progress">
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
                <span className="progress-text">{task.progress}%</span>
              </div>
            </div>
            <div className="task-list-cell task-col-status">
              <span className={getStatusClass(task.status)}>
                {getStatusLabel(task.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
