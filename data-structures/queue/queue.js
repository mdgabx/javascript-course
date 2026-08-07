function initQueue() {
  return {
    collection: []
  };
}

function print(queue) {
  console.log(queue.collection);
}

function enqueue(queue, element) {
  queue.collection.push(element)
}

function dequeue(queue) {
  return queue.collection.shift();
}

function front(queue) {
  return queue.collection[0];
}

function size(queue) {
  return queue.collection.length;
}

function isEmpty(queue) {
  return  queue.collection.length > 0 ? false : true
}

const myQueue = initQueue();
enqueue(myQueue, "first");
enqueue(myQueue, "second");
dequeue(myQueue);
size(myQueue);
front(myQueue);
isEmpty(myQueue);
console.log(myQueue.collection); 