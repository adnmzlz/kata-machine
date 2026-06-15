export default function quick_sort(arr: number[]): void {
  quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr: number[], l: number, h: number): void {
  if (l >= h) {
    return;
  }

  const pivot = partition(arr, l, h);

  quickSort(arr, l, pivot - 1);
  quickSort(arr, pivot + 1, h);
}

function partition(arr: number[], l: number, h: number) {
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