import React from 'react';
import type { Task } from '../types/Task';
import './GanttChart.css';

interface GanttChartProps {
  tasks: Task[];
  onTaskSelect: (task: Task) => void;
  selectedTask: Task | null;
}

export const GanttChart: React.FC<GanttChartProps> = ({ tasks, onTaskSelect, selectedTask }) => {
  // プロジェクト全体の期間を計算
  const allDates = tasks.flatMap(task => [task.startDate, task.endDate]);
  const minDate = new Date(Math.min(...allDates.map(d => d.getTime())));
  const maxDate = new Date(Math.max(...allDates.map(d => d.getTime())));
  
  // 月単位のヘッダーを生成
  const generateMonthHeaders = () => {
    const months: { date: Date; label: string }[] = [];
    const current = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    
    while (current <= maxDate) {
      months.push({
        date: new Date(current),
        label: `${current.getFullYear()}/${String(current.getMonth() + 1).padStart(2, '0')}`
      });
      current.setMonth(current.getMonth() + 1);
    }
    
    return months;
  };

  const monthHeaders = generateMonthHeaders();
  const totalDays = Math.ceil((maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  // タスクバーの位置とサイズを計算
  const calculateBarStyle = (task: Task) => {
    const startOffset = Math.ceil((task.startDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24));
    const duration = Math.ceil((task.endDate.getTime() - task.startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    
    const leftPercent = (startOffset / totalDays) * 100;
    const widthPercent = (duration / totalDays) * 100;
    
    return {
      left: `${leftPercent}%`,
      width: `${widthPercent}%`
    };
  };

  // ステータスに基づく色
  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed': return '#107c10';
      case 'in-progress': return '#0078d4';
      case 'delayed': return '#d83b01';
      default: return '#8a8886';
    }
  };

  return (
    <div className="gantt-chart">
      {/* タスク名列 */}
      <div className="gantt-left-panel">
        <div className="gantt-header-cell task-name-header">タスク名</div>
        {tasks.map(task => (
          <div 
            key={task.id} 
            className={`gantt-task-name ${selectedTask?.id === task.id ? 'selected' : ''}`}
            onClick={() => onTaskSelect(task)}
          >
            <div className="task-name-content">
              <span className="task-name-text">{task.name}</span>
              <span className="task-category">{task.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* タイムライン列 */}
      <div className="gantt-right-panel">
        {/* 月ヘッダー */}
        <div className="gantt-timeline-header">
          {monthHeaders.map((month, index) => (
            <div key={index} className="gantt-month-header">
              {month.label}
            </div>
          ))}
        </div>

        {/* タスクバー */}
        <div className="gantt-timeline-body">
          {tasks.map(task => (
            <div 
              key={task.id} 
              className={`gantt-task-row ${selectedTask?.id === task.id ? 'selected' : ''}`}
              onClick={() => onTaskSelect(task)}
            >
              <div className="gantt-grid-background">
                {monthHeaders.map((_, index) => (
                  <div key={index} className="gantt-grid-cell"></div>
                ))}
              </div>
              <div 
                className="gantt-task-bar"
                style={{
                  ...calculateBarStyle(task),
                  backgroundColor: getStatusColor(task.status)
                }}
              >
                <div className="gantt-task-progress" style={{ width: `${task.progress}%` }}>
                  <span className="gantt-task-progress-text">{task.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
