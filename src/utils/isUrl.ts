export function isURL(str: string) {
  try {
    new URL(str);
    return true;
  } catch (e) {
    return false;
  }
}
