import { Github } from "lucide-react";

export default function GithubLink() {
  return (
    <div className="fixed z-50 bottom-4 right-4">
      <a
        href="https://github.com/irsyadulibad/notes247"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-xs border border-neutral-700 rounded-md p-2 hover:bg-neutral-900 hover:text-white md:text-sm"
      >
        <Github className="w-4 h-4 lg:w-5 lg:h-5" />
        GitHub Repo
      </a>
    </div>
  );
}
