export type User = {
  id: number;
  name: string;
  avatarUrl: string;
  isOnline?: boolean;
};

export type Comment = {
  id: number;
  user: User;
  time: string;
  content: string;
};

export type Attachment = {
  id: number;
  name: string;
  url: string;
  type: string;
};

export type Task = {
  id: number;
  title: string;
  description: string;
  status: "To do" | "In Progress" | "Completed";
  timeline: {
    start: string;
    end: string;
  };
  users: User[];
  comments: Comment[];
  coverImageUrl?: string;
  createdAt: string;
  updatedAt?: string;
};
