import { Search } from "lucide-react";
import usePageStore from "../../stores/pageStore";

export default function SearchBar() {
  const { setSearchKeyword } = usePageStore();

  return (
    <div className="relative">
      <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-900 w-4 h-4" />
      <input
        placeholder="Cari catatan anda..."
        onKeyUp={(e) => setSearchKeyword(e.currentTarget.value)}
        className="pl-10 border border-gray-300 rounded-xl text-sm w-full focus:outline-gray-200 sm:pl-12 pr-12 py-2 sm:py-3"
      />
    </div>
  );
}
