export default function merge_sort(arr: number[]): void {
  mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr: number[], l: number, r: number): void {
  if (l >= r) return;

  const mid = Math.floor(l + (r - l) / 2);

  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function merge(arr: number[], l: number, mid: number, r: number): void {
  let L: number[] = arr.slice(l, mid + 1);
  let R: number[] = arr.slice(mid + 1, r + 1);

  let i = 0, j = 0, k = l;

  while (i < L.length && j < R.length) {
    arr[k++] = L[i] <= R[j] ? L[i++] : R[j++];
  }

  while (i < L.length) arr[k++] = L[i++];
  while (j < R.length) arr[k++] = R[j++];
}