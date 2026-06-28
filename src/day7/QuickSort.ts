export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], l: number, r: number): void {
  if (l >= r) return;

  const pivotIdx = partition(arr, l, r);

  qs(arr, l, pivotIdx - 1);
  qs(arr, pivotIdx + 1, r);
}

function partition(arr: number[], l: number, r: number): number {
  let idx = l - 1;
  const pivot = arr[r];

  for (let i = l; l < r; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[r] = arr[idx];
  arr[idx] = pivot;

  return idx;
}