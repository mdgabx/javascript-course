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
    
}

const myList = initList();
console.log(isEmpty(myList));
add(myList, 42);
add(myList, 43);
add(myList, 44);
console.log(myList);
console.log(isEmpty(myList));