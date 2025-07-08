import useNoteStore from "../../stores/noteStore";
import type { Note } from "../../types/note";

export default function NoteContent() {
  const { selectedNote, updateNote } = useNoteStore();

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 bg-white/50 backdrop-blur-sm">
      <textarea
        placeholder="Mulai tulis hal yang kamu pikirkan"
        value={selectedNote?.content || ""}
        onChange={(e) =>
          updateNote({
            ...(selectedNote as Note),
            content: e.target.value,
          })
        }
        className="w-full h-full resize-none border-none p-0 focus:ring-0 focus:border-none focus:outline-none shadow-none text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg bg-transparent placeholder:text-gray-400"
        style={{ minHeight: "calc(100vh - 200px)" }}
      />
    </div>
  );
}
