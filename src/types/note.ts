export interface Note {
  id: string;
  title?: string | null;
  content?: string | null;
  isPinned?: boolean;
  createdAt: Date;
  updatedAt: Date;
}
