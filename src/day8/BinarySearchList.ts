export default function bs_list(haystack: number[], needle: number): boolean {
  let l = 0, r = haystack.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);

    if (haystack[mid] === needle) return true;
    if (haystack[mid] > needle) r = mid - 1;
    else l = mid + 1;
  }

  return false;
}