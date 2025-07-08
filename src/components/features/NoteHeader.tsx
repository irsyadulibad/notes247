import { Calendar, Edit3, Trash2, Pin, ArrowLeft } from "lucide-react";
import useNoteStore from "../../stores/noteStore";
import usePageStore from "../../stores/pageStore";
import { emptyString, formatDate, getWordCount } from "../../lib/utils";
import Badge from "../layout/Badge";
import type { Note } from "../../types/note";

export default function NoteHeader() {
  const { selectedNote, deleteNote, togglePin, updateNote, setSelectedNote } =
    useNoteStore();
  const { setIsSidebarOpen } = usePageStore();

  const handleBackToList = () => {
    setIsSidebarOpen(true);
    setSelectedNote(null);
  };

  return (
    <>
      <div className="lg:hidden bg-white/80 backdrop-blur-sm border-b border-gray-100/50 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={handleBackToList} className="p-2">
            <ArrowLeft size={18} />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-semibold text-gray-900 truncate">
              {emptyString(selectedNote?.title, "Tanpa Judul")}
            </h2>
            <p className="text-xs text-gray-500">
              {getWordCount(selectedNote?.content || "")} kata
            </p>
          </div>
          <button
            onClick={() => deleteNote(selectedNote?.id || "")}
            className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 p-2"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
      <div className="hidden lg:block bg-white/80 backdrop-blur-sm border-b border-gray-100/50 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Badge className="bg-blue-50 text-blue-700 border-blue-200">
              <Calendar size={12} className="mr-1" />
              Dibuat {formatDate(selectedNote?.createdAt || "", "DD MMMM YYYY")}
            </Badge>
            <Badge className="bg-green-50 text-green-700 border-green-200">
              <Edit3 size={12} className="mr-1" />
              {getWordCount(selectedNote?.content || "")} kata
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
              Diperbarui:{" "}
              {formatDate(
                selectedNote?.updatedAt || "",
                "DD MMMM YYYY | HH:mm"
              )}
            </div>
            <button
              onClick={() => togglePin(selectedNote?.id || "")}
              className={`${
                selectedNote?.isPinned
                  ? "bg-blue-50 text-blue-600 border-blue-200"
                  : ""
              } flex items-center gap-1 border border-gray-200 rounded-md px-2 py-1`}
            >
              <Pin
                className={`w-4 h-4 mr-1 ${
                  selectedNote?.isPinned ? "fill-current" : ""
                }`}
              />
              {selectedNote?.isPinned ? "Unpin" : "Pin"}
            </button>
            <button
              onClick={() => deleteNote(selectedNote?.id || "")}
              className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 flex items-center gap-1 border rounded-md px-2 py-1"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Delete
            </button>
          </div>
        </div>

        <input
          placeholder="Judul catatan..."
          value={selectedNote?.title || ""}
          onChange={(e) =>
            updateNote({
              ...(selectedNote as Note),
              title: e.target.value,
            })
          }
          className="text-3xl font-bold border-none p-0 focus:ring-0 focus:border-none focus:outline-none shadow-none bg-transparent placeholder:text-gray-400 w-full"
        />
      </div>
    </>
  );
}
