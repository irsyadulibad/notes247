import useNoteStore from "../../stores/noteStore";

export default function NoteContent() {
  const { selectedNote } = useNoteStore();

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h1>{selectedNote?.content}</h1>
    </div>
  );
}
