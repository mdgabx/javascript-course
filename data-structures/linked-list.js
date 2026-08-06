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

  while(current !== null) {
    if(current.element === element) {
      return true
    }

    current = current.next;
  }

  return false;
}

function getAt(list, index) {
 let current = list.head;
 let count = 0;

 if(index < 0 || index >= list.length) {
  return undefined;
 }

 while(count < index) {
  current = current.next;
  count++;
 }

 return current.element;
}


function insertAt(list, index, element) {
  
}

function removeAt(list, index) {
 
}

function clear(list) {

}

const myList = initList();
add(myList, 42);
add(myList, 43);
add(myList, 44);
// console.log(myList);
// console.log(JSON.stringify(myList, null, 4))
console.log(contains(myList, 54));
console.log(getAt(myList, 1))