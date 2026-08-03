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
    const node = {
        element: element,
        next: null
    };

    if (isEmpty(list)) {
        list.head = node;
    } 

    list.length++;
}

const myList = initList();
console.log(isEmpty(myList));
add(myList, 42);
console.log(myList);
console.log(isEmpty(myList));