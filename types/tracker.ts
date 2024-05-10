type Tracker = "Task" | "Feature" | "Bug";

type Task = {
  id: number;
  tracker: Tracker;
  status: string;
  priority: string;
  subject: string;
  assignee: string;
  updated: string;
  due_date?: string;
  progress?: number;
};

export type { Task, Tracker };
