export default function pre_order_search(head: BinaryNode<number>): number[] {
  if (!head) return [];

  const result = [];
  const stack = [head];

  while (stack.length > 0) {
    const curr = stack.pop()!;
    result.push(curr.value);

    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);
  }

  return result;
}