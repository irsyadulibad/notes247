import dayjs from "dayjs";

export function emptyString(
  str: string | null | undefined,
  defaultValue: string = ""
) {
  return str === null || str === undefined || str === "" ? defaultValue : str;
}

export function subString(str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
  return str;
}

export function formatDate(date: Date, format: string = "DD/MM/YYYY") {
  return dayjs(date).locale("id").format(format);
}
