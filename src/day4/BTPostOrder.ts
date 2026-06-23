export default function post_order_search(head: BinaryNode<number>): number[] {
  if (!head) return [];

  const stack1 = [head];
  const stack2 = [];
  const result = [];

  while (stack1.length > 0) {
    const curr = stack1.pop()!;
    stack2.push(curr);

    curr.left && stack1.push(curr.left);
    curr.right && stack1.push(curr.right);
  }

  while (stack2.length > 0) {
    result.push(stack2.pop()!.value);
  }

  return result;
}