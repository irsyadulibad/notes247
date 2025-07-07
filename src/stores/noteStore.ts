import { create } from "zustand";
import type { Note } from "../types/note";
import { createJSONStorage, persist } from "zustand/middleware";

interface NoteState {
  notes: Note[];
  selectedNote: Note | null;
  addNote: () => Note;
  updateNote: (note: Note) => Note;
  deleteNote: (id: string) => void;
  setSelectedNote: (note: Note | null) => void;
}

const useNoteStore = create<NoteState>()(
  persist(
    (set) => ({
      notes: [] as Note[],
      selectedNote: null,
      addNote: () => {
        const note = {
          id: crypto.randomUUID(),
          title: null,
          content: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        };

        set((state) => ({
          notes: [...state.notes, note],
          selectedNote: note,
        }));

        return note;
      },
      updateNote: (note: Note) => {
        set((state) => ({
          notes: state.notes.map((n) => (n.id === note.id ? note : n)),
          selectedNote: note,
        }));

        return note;
      },
      deleteNote: (id: string) => {
        set((state) => ({
          notes: state.notes.filter((n) => n.id !== id),
          selectedNote: null,
        }));
      },
      setSelectedNote: (note: Note | null) => set({ selectedNote: note }),
    }),
    {
      name: "notes",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useNoteStore;
