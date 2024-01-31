
export function htmlDecode(html: string) {
  var doc = new DOMParser().parseFromString(html, "text/html");
  return doc.documentElement.textContent;
}