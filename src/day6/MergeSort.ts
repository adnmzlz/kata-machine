export default function merge_sort(arr: number[]): void {
  mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr: number[], l: number, r: number): void {
  if (l >= r) {
    return;
  }

  const m = Math.floor(l + (r - l) / 2);

  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);

  merge(arr, l, m, r);
}

function merge(arr: number[], l: number, m: number, r: number) {
  const L: number[] = arr.slice(l, m + 1);
  const R: number[] = arr.slice(m + 1, r + 1);

  let i = 0, j = 0, k = l;

  while (i < L.length && j < R.length) {
    arr[k++] = L[i] <= R[j] ? L[i++] : R[j++]; 
  }

  while (i < L.length) arr[k++] = L[i++];
  while (i < R.length) arr[k++] = R[j++];
}