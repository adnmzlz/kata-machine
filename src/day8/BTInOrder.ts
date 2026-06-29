export default function in_order_search(head: BinaryNode<number>): number[] {
  const path = [];
  const stack = [];
  let curr: BinaryNode<number> | null | undefined = head;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop()!;
    path.push(curr.value);
    curr = curr.right;
  }

  return path;
}