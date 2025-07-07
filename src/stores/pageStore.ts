import { create } from "zustand";

interface PageStore {
  isSidebarOpen: boolean;
  searchKeyword: string;
  setIsSidebarOpen: (isSidebarOpen: boolean) => void;
  setSearchKeyword: (searchKeyword: string) => void;
}

const usePageStore = create<PageStore>((set) => ({
  isSidebarOpen: false,
  searchKeyword: "",
  setIsSidebarOpen: (isSidebarOpen) => set({ isSidebarOpen }),
  setSearchKeyword: (searchKeyword) => set({ searchKeyword }),
}));

export default usePageStore;
