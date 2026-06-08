export default function merge_sort(arr: number[]): void {
  mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr: number[], left: number, right: number): void {
  if (left >= right) {
    return;
  }

  const mid = Math.floor(left + (right - left) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function merge(arr: number[], left: number, mid: number, right: number): void {
  const aL = arr.slice(left, mid + 1);
  const aR = arr.slice(mid + 1, right + 1);

  let k = left, i = 0, j = 0;

  while (i < aL.length && j < aR.length) {
    arr[k++] = aL[i] <= aR[j] ? aL[i++] : aR[j++];
  } 

  while (i < aL.length) arr[k++] = aL[i++];
  while (j < aR.length) arr[k++] = aR[j++];
}

const arr = [9, 3, 7, 4, 69, 420, 42];
merge_sort(arr);
console.log(arr);