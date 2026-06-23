export default function in_order_search(head: BinaryNode<number>): number[] {
  const stack = [];
  const result = [];
  let curr: BinaryNode<number> | null | undefined = head;

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop()!;
    result.push(curr.value);
    curr = curr.right;
  }

  return result;
}