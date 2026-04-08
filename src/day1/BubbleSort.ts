export default function bubble_sort(arr: number[]): void {
  // let end: number = arr.length - 2;
  // let current: number;
  
  // while (end > 0) {
  //   for (let i = 0; i < end; i++) {
  //     current = arr[i];
  //     if (arr[i] > arr[i + 1]) {
  //       arr[i] = arr[i + 1];
  //       arr[i + 1] = current;
  //     }
  //     end --;
  //   }
  // }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;        
      }
    }
  }
}