import Aside from "./components/layout/Aside";
import EmptyNote from "./components/features/EmptyNote";
import NoteContent from "./components/features/NoteContent";
import NoteHeader from "./components/features/NoteHeader";
import useNoteStore from "./stores/noteStore";
import usePageStore from "./stores/pageStore";

export default function App() {
  const { selectedNote } = useNoteStore();
  const { isSidebarOpen, setIsSidebarOpen } = usePageStore();

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

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
