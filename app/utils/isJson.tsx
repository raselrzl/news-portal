export function isJson(str: string | null | undefined): boolean {
  if (!str) return false;  // empty or undefined is not JSON

  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
