function qs(arr: number[], lo: number, hi: number): void {
  // Base case: if lo index is bigger than hi index - essentially means (portion of?) the array is sorted
  if (lo >= hi) {
    return;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1); // Left side
  qs(arr, pivotIdx + 1, hi); // Right side
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let idx = lo - 1;

  // Walk from lo, to (but not including) hi (cos it's the pivot and we don't want to move that here)

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;

  return idx;
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}