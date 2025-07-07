import { Edit3, Menu, Plus } from "lucide-react";
import usePageStore from "../../stores/pageStore";
import useNoteStore from "../../stores/noteStore";

export default function EmptyNote() {
  const { setIsSidebarOpen } = usePageStore();
  const { addNote } = useNoteStore();

  return (
    <div className="flex-1 flex items-center justify-center p-4">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-30 lg:hidden bg-white/80 backdrop-blur-sm"
      >
        <Menu className="w-4 h-4" />
      </button>

      <div className="text-center max-w-md">
        <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
          <Edit3 className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
          Tulis catatanmu di sini
        </h2>
        <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed px-4">
          Pilih catatan dari sidebar untuk membaca, atau buat catatan baru untuk
          memulai menulis.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden rounded-xl px-6 py-3 flex items-center justify-center"
          >
            <Menu className="w-5 h-5 mr-2" />
            Lihat Catatan
          </button>
          <button
            onClick={addNote}
            className="bg-gradient-primary hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl px-6 sm:px-8 py-3 flex items-center justify-center text-white"
          >
            <Plus className="w-5 h-5 mr-2" />
            Tambah Catatan
          </button>
        </div>
      </div>
    </div>
  );
}
