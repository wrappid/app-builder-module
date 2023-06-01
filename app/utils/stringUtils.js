export function getLabel(string = "") {
  if (string) {
    string = string?.replace(/\s/g, "");
    return (string?.substring(0, 1)?.toUpperCase() + string?.substring(1))
      ?.replace(/([A-Z])/g, " $1")
      ?.trim();
  } else {
    return "";
  }
}
