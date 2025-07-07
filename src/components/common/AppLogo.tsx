import { BookOpen } from "lucide-react";

export default function AppLogo() {
  return (
    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </div>
  );
}
