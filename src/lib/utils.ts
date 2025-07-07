import dayjs from "dayjs";
import "dayjs/locale/id";

export function emptyString(
  value: string | null | undefined,
  fallback: string
): string {
  return value && value.trim() !== "" ? value : fallback;
}

export function subString(text: string, maxLength: number): string {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export function formatDate(date: Date | string, format: string): string {
  return dayjs(date).locale("id").format(format);
}

const noteColors = [
  { bg: "bg-green-100", border: "border-green-400" },
  { bg: "bg-purple-100", border: "border-purple-400" },
  { bg: "bg-pink-100", border: "border-pink-400" },
  { bg: "bg-indigo-100", border: "border-indigo-400" },
  { bg: "bg-orange-100", border: "border-orange-400" },
  { bg: "bg-teal-100", border: "border-teal-400" },
];

export function getNoteBackgroundColor(index: number): string {
  return noteColors[index % noteColors.length].bg;
}

export function getNoteBorderColor(index: number): string {
  return noteColors[index % noteColors.length].border;
}
