const initStack = () => {
  return {
    collection: []
  }
}

const push = (stack, element) => {
  stack.collection.push(element)
}

const pop = (stack) => {
  return stack.collection.pop()
}

const peek = (stack) => {

  if(!stack.collection.length > 0) {
    return undefined
  } 

  return stack.collection[stack.collection.length - 1]
}

const isEmpty = (stack) => {
  return stack.collection.length > 0 ? false : true
}

const clear = (stack) => {
  return stack.collection = [];
}

const myStack = initStack();

push(myStack, 2);
push(myStack, 3);
push(myStack, 6);
console.log(pop(myStack));
console.log(myStack)