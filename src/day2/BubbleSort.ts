export default function bubble_sort(arr: number[]): void {
  const x = arr.length - 1;

  for (let i = 0; i <= x; i++) {
    for (let j = 0; j < x - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
}