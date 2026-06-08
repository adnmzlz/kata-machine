function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivotIndex = partition(arr, lo, hi);

  qs(arr, lo, pivotIndex - 1);
  qs(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp: number = arr[i];
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

// 1. Quicksort function: pass in the array, lo and hi.
//    - Base case: lo is >= than hi, return
//    - const pivotIndex (new function: partition)
//    - recurse left side, pass in arr, lo and pivot - 1
//    - recurse right side, pass in arr, pivot + 1 and hi

// 2. Partition function: pass in array, lo and hi
//    - const pivot = arr[hi]
//    - let idx = lo - 1
//    - loop through arr from lo to hi {
//      - if arr[i] <= pivot, idx++, swap arr[i] with arr[idx]}
//    - idx++, arr[hi] = arr[idx], arr[idx] = pivot
//    - return idx