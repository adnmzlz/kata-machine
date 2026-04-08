export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {

  // Base case 1
  // (structural check)
  if (a === null && b === null) {
    return true;
  }

  // Base case 2
  // (structural check)
  if (a === null || b === null) {
    return false;
  }

  // Base case 3
  // (value check)
  if (a.value !== b.value) {
    return false;
  }

  return compare(a.left, b.left) && compare(a.right, b.right);
}