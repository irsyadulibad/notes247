import Aside from "./components/layout/Aside";
import EmptyNote from "./components/features/EmptyNote";
import NoteContent from "./components/features/NoteContent";
import NoteHeader from "./components/features/NoteHeader";
import useNoteStore from "./stores/noteStore";

export default function App() {
  const { selectedNote } = useNoteStore();

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Aside selectedNote={false} />
      <main className="flex-1 flex flex-col min-w-0">
        {selectedNote ? (
          <>
            <NoteHeader />
            <NoteContent />
          </>
        ) : (
          <EmptyNote />
        )}
      </main>
    </div>
  );
}
