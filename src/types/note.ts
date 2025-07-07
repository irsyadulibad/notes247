export interface Note {
  id: string;
  title?: string | null;
  content?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
