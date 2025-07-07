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
  togglePin: (id: string) => void;
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
          isPinned: false,
          isArchived: false,
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
        const updatedNote = {
          ...note,
          updatedAt: new Date(),
        };

        set((state) => ({
          notes: state.notes.map((n) => (n.id === note.id ? updatedNote : n)),
          selectedNote: updatedNote,
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

      togglePin: (id: string) => {
        set((state) => {
          const updatedNotes = state.notes.map((n) =>
            n.id === id ? { ...n, isPinned: !n.isPinned } : n
          );

          const updatedSelectedNote =
            state.selectedNote?.id === id
              ? {
                  ...state.selectedNote,
                  isPinned: !state.selectedNote.isPinned,
                }
              : state.selectedNote;

          return {
            notes: updatedNotes,
            selectedNote: updatedSelectedNote,
          };
        });
      },
    }),
    {
      name: "notes",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useNoteStore;
