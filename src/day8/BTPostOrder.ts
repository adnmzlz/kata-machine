export default function post_order_search(head: BinaryNode<number>): number[] {
  const result = [];
  const stack1 = [head];
  const stack2 = [];

  while (stack1.length) {
    const curr = stack1.pop()!;
    stack2.push(curr);

    if (curr.left) stack1.push(curr.left);
    if (curr.right) stack1.push(curr.right);
  }

  while (stack2.length) {
    result.push(stack2.pop()!.value);
  }

  return result;
}