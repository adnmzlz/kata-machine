export default function merge_sort(arr: number[]): void {
    mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr: number[], left: number, right: number) {
    if (left >= right) {
        return;
    }

    const mid = Math.floor(left + (right - left) / 2);

    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);

    merge(arr, left, mid, right);
}

function merge(arr: number[], left: number, mid: number, right: number) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    const aL = arr.slice(left, left + n1);
    const aR = arr.slice(mid + 1, mid + 1 + n2);

    let k = left,
        i = 0,
        j = 0;

    while (i < n1 && j < n2) {
        if (aL[i] <= aR[j]) {
            arr[k] = aL[i];
            i++;
        } else {
            arr[k] = aR[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = aL[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = aR[j];
        j++;
        k++;
    }
}
