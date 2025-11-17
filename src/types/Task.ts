export interface Task {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  progress: number; // 0-100
  dependencies?: string[]; // 依存するタスクのID
  assignee?: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'delayed';
  category: string;
  description?: string;
}
