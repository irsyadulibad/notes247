import { Menu } from "lucide-react";
import Aside from "./components/layout/Aside";
import usePageStore from "./stores/pageStore";

function App() {
  const { isSidebarOpen, setIsSidebarOpen } = usePageStore();

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Aside selectedNote={false} />

      <button
        className="fixed top-4 left-4 z-30 lg:hidden bg-white/80 backdrop-blur-sm"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu size={24} />
      </button>
    </div>
  );
}

export default App;
