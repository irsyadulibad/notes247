import Aside from "./components/layout/Aside";
import NoteContent from "./components/layout/NoteContent";
import NoteHeader from "./components/layout/NoteHeader";
import useNoteStore from "./stores/noteStore";
import EmptyNote from "./components/features/EmptyNote";

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
