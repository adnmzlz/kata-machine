export default function in_order_search(head: BinaryNode<number>): number[] {
  const stack: BinaryNode<number>[] = [];
  const result = [];
  let curr: BinaryNode<number> | null | undefined = head;

  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    const popped = stack.pop();
    if (!popped) break; // Safety guard 

    result.push(popped.value);
    curr = popped.right;
  }

  return result;
}