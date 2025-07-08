import { Plus, X } from "lucide-react";
import usePageStore from "../../stores/pageStore";
import useNoteStore from "../../stores/noteStore";
import AppLogo from "../common/AppLogo";
import SearchBar from "../common/SearchBar";
import NoteList from "./NoteList";

export default function Aside({ selectedNote }: { selectedNote: boolean }) {
  const { isSidebarOpen, setIsSidebarOpen } = usePageStore();
  const { addNote } = useNoteStore();

  return (
    <aside
      className={`
        fixed lg:relative inset-y-0 left-0 z-50 lg:z-auto
          w-full sm:w-96 lg:w-96
          bg-white/80 backdrop-blur-sm border-r border-white/20 shadow-xl
          flex flex-col transition-transform duration-300 ease-in-out
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          ${selectedNote && !isSidebarOpen ? "hidden lg:flex" : "flex"}
          `}
    >
      <div className="p-4 sm:p-6 border-b border-gray-100/50">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <AppLogo />

            {/* Title */}
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Notes 247
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">5 notes</p>
            </div>
          </div>
          {/* Add New Note */}
          <div className="flex gap-4">
            <button
              onClick={() => addNote()}
              className="bg-gradient-primary hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl text-xs sm:text-sm px-2 sm:px-4 flex p-2 text-white items-center"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">Tambah</span>
            </button>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Search */}
        <SearchBar />
      </div>

      <NoteList />
    </aside>
  );
}
