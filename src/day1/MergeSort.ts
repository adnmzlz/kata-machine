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
  // Defining lengths of sub-arrays
  const n1: number = mid - left + 1;
  const n2: number = right - mid;

  // Create temp arrays
  const L: number[] = arr.slice(left, left + n1)
  const R: number[]  = arr.slice(mid + 1, mid + 1 + n2);

  let i = 0;
  let j = 0;
  let k = left;

  // Merge temp arrays back into arr 
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy remaining elements of L[] if any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy remaining elements of R[] if any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

const arr = [9, 3, 7, 4, 69, 420, 42];
merge_sort(arr);
console.log(arr)