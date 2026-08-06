const initStack = () => {
  return {
    collection: []
  }
}

const push = (stack, element) => {
  stack.collection.push(element)
}

const myStack = initStack();

push(myStack, 2);
push(myStack, 3);
push(myStack, 6);
console.log(myStack)