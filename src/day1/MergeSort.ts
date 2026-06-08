// Wasn't in the course, taken from https://www.geeksforgeeks.org/dsa/merge-sort/

export default function merge_sort(arr: number[]): void {
    // Pass in array, left and right
    mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr: number[], left: number, right: number) {
    // Base case: array (or portion) is sorted
    if (left >= right) {
      return;
    }

    // Get mid using same method as binary search
    const mid = Math.floor(left + (right - left) / 2);

    // Recursion 
    mergeSort(arr, left, mid); // left (remember TO include mid!)
    mergeSort(arr, mid + 1, right); // right

    merge(arr, left, mid, right);
}

function merge(arr: number[], left: number, mid: number, right: number) {
  // Create temp arrays
  const L: number[] = arr.slice(left, mid + 1)
  const R: number[]  = arr.slice(mid + 1, right + 1);

  let i = 0;
  let j = 0;
  let k = left;

  // Merge temp arrays back into arr 
  while (i < L.length && j < R.length) {
    arr[k++] = L[i] <= R[j] ? L[i++] : R[j++];
  }

  // Copy remaining elements of L[] (if any) into arr
  while (i < L.length) arr[k++] = L[i++];
  // Copy remaining elements of R[] (if any) into arr
  while (j < R.length) arr[k++] = R[j++];
}

const arr = [9, 3, 7, 4, 69, 420, 42];
merge_sort(arr);
console.log(arr)