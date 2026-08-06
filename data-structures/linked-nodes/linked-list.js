function initList() {
  return {
    head: null,
    length: 0
  };
}

function isEmpty(list) {
  return list.length === 0;
}

function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}

function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}

function contains(list, element) {
  let current = list.head

  while (current !== null) {
    if (current.element === element) {
      return true
    }

    current = current.next;
  }

  return false;
}

function getAt(list, index) {
  let current = list.head;
  let count = 0;

  if (index < 0 || index >= list.length) {
    return undefined;
  }

  while (count < index) {
    current = current.next;
    count++;
  }

  return current.element;
}


function insertAt(list, index, element) {
  if (index < 0 || index > list.length) {
    return;
  }

  const node = {
    element: element,
    next: null
  };

  if (index === 0) {
    node.next = list.head;
    list.head = node;

  } else {
    let previous = list.head;
    let count = 0;

    while (count < index - 1) {
      previous = previous.next;
      count++;
    }

    node.next = previous.next;
    previous.next = node;
  }

  list.length++;
}

function removeAt(list, index) {
  if(index < 0 || index >= list.length) return

  if(index === 0) {
    list.head = list.head.next;
  } else {
    let previous = list.head;
    let count = 0;

    while(count < index - 1) {
      previous = previous.next;
      count++;
    }

     previous.next = previous.next.next;
  }

  list.length--;
}

function clear(list) {
  list.head = null;
  list.length = 0;
}

const myList = initList();
add(myList, 42);
add(myList, 43);
add(myList, 44);
//console.log(myList);
console.log(JSON.stringify(myList, null, 4))
contains(myList, 54);
// getAt(myList, 1);
insertAt(myList, 1, 12);
insertAt(myList, 0, 22);


