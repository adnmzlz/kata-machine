export default function pre_order_search(head: BinaryNode<number>): number[] {
  if (!head) return [];

  const stack = [head];
  const result = [];

  while (stack.length > 0) {
    const curr = stack.pop()!;
    result.push(curr.value);
    
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return result;
}