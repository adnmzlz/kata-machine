export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}

function qs(arr: number[], l: number, h: number): void {
  if (l >= h) return;

  const pivotIndex = partition(arr, l, h);

  qs(arr, l, pivotIndex - 1);
  qs(arr, pivotIndex + 1, h);
}

function partition(arr: number[], l: number, h: number): number {
  const pivot = arr[h];
  let idx = l - 1;

  for (let i = l; i < h; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }

  idx++;
  arr[h] = arr[idx];
  arr[idx] = pivot;

  return idx;
}