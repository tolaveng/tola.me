export const dateFormt = (date: Date) => {
  if (!date) return "";

  if (typeof date === "string") {
    date = new Date(date);
  }

  const day = date.getDate() > 9 ? date.getDate().toString() : "0" + date.getDate();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + date.getMonth() + 1;
  const year = date.getFullYear().toString().substring(2);
  return `${day}/${month}/${year}`
}