export type DeskType = {
  id: string;
  title: string;
};

export type ActionType = {
  newText: string;
  id: string;
};

export type TaskType = {
  id: string;
  // state: string;
  deskId: string;
  title: string;
  users: number;
  prayers: number;
  answered: boolean;
  subscribed: boolean;
};
