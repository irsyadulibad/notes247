import type { Note } from "../../types/note";
import { Calendar, Clock, MoreVertical } from "lucide-react";
import Card from "../common/Card";
import { emptyString, formatDate, subString } from "../../lib/utils";

export default function NoteItem({ note }: { note: Note }) {
  return (
    <Card key={note.id} className="bg-blue-100">
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <div className="flex items-center gap-1 sm:gap-2">
          <h3 className="font-semibold text-gray-900 truncate flex-1 text-sm sm:text-lg">
            {emptyString(note.title, "Tanpa Judul")}
          </h3>
        </div>

        <div className="flex items-center gap-1">
          <MoreVertical size={16} className="text-gray-400" />
        </div>
      </div>

      <p className="text-gray-600 line-clamp-2 sm:line-clamp-3 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
        {subString(emptyString(note.content, "Tidak ada konten..."), 100)}
      </p>

      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 text-gray-500">
            <Calendar className="w-2 h-2 sm:w-3 sm:h-3" />
            <span className="text-xs">
              {formatDate(note.createdAt, "DD MMM YYYY")}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-gray-500">
            <Clock className="w-3 h-3" />
            {formatDate(note.updatedAt, "HH:mm")}
          </div>
        </div>
        <span className="text-xs bg-white/75 backdrop-blur-sm border border-gray-100/50 rounded-full px-2 sm:px-3 py-0.5">
          {note.content?.length ?? 0} Kata
        </span>
      </div>
    </Card>
  );
}
