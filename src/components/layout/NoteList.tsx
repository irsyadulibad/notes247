import { Search } from "lucide-react";
import useNoteStore from "../../stores/noteStore";
import NoteItem from "./NoteItem";

export default function NoteList() {
  const { notes } = useNoteStore();

  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2 sm:space-y-3">
      {notes.length === 0 ? (
        <div className="p-6 sm:p-8 text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
          </div>
          <p className="text-gray-500 font-medium text-sm sm:text-base">
            Catatan kosong
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Coba pencarian lainnya
          </p>
        </div>
      ) : (
        notes.map((note, index) => (
          <NoteItem key={note.id} note={note} index={index} />
        ))
      )}
    </div>
  );
}
