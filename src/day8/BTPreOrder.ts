export default function pre_order_search(head: BinaryNode<number>): number[] {
  if (!head) return [];
  
  const path = [];
  const stack = [head];
  
  while (stack.length) {
    const curr = stack.pop()!;
    path.push(curr.value);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return path;
}