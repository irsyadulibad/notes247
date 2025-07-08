import { create } from "zustand";
import type { Note } from "../types/note";
import { createJSONStorage, persist } from "zustand/middleware";
import usePageStore from "./pageStore";

interface NoteState {
  notes: Note[];
  selectedNote: Note | null;
  getNotes: () => Note[];
  addNote: () => Note;
  updateNote: (note: Note) => Note;
  deleteNote: (id: string) => void;
  setSelectedNote: (note: Note | null) => void;
  togglePin: (id: string) => void;
}

const useNoteStore = create<NoteState>()(
  persist(
    (set, get) => ({
      notes: [] as Note[],
      selectedNote: null,

      getNotes: () => {
        const keyword = usePageStore.getState().searchKeyword.toLowerCase();
        const notes = get().notes;

        const sortedNotes = [...notes].sort((a, b) => {
          if (a.isPinned && !b.isPinned) return -1;
          if (!a.isPinned && b.isPinned) return 1;

          return (
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
        });

        if (keyword) {
          return sortedNotes.filter(
            (note) =>
              note.title?.toLowerCase().includes(keyword) ||
              note.content?.toLowerCase().includes(keyword)
          );
        }

        return sortedNotes;
      },

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
      partialize: (state) => {
        const { notes } = state;
        return { notes };
      },
    }
  )
);

export default useNoteStore;
