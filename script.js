class LinkedList {
    constructor() {
        (this.size = 0), (this.header = null), (this.tail = null);
    }
    append(value) {
        const node = new Node(value);
        if (this.size === 0) {
            this.header = node;
            this.tail = node;
        } else {
            const temp = this.tail;
            this.tail = node;
            temp.next = this.tail;
        }
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.size === 0) {
            this.header = node;
            this.tail = node;
        } else {
            node.next = this.header;
            this.header = node;
        }
        this.size++;
    }

    sizeOfList() {
        return this.size;
    }

    head() {
        return this.header.data;
    }

    tailNode() {
        return this.tail.data;
    }

    at(index) {
        let currentData = this.header;
        let count = 0;
        while (currentData) {
            if (count == index) {
                // console.log(currentData.data);
                return currentData.data;
            }
            count++;
            currentData = currentData.next;
        }
        return null;
    }

    pop() {
        if (this.size === 0) {
            return null;
        }
        let data = this.tail.data;
        if (this.size === 1) {
            this.header = null;
            this.tail = null;
        } else {
            let currentData = this.header;
            while (currentData.next.next !== null) {
                currentData = currentData.next;
            }
            currentData.next = null;
            this.tail = currentData;
        }
        this.size--;
        return data;
    }

    removeFirst() {
        if (this.size === 0) {
            return null;
        }
        let data = this.header.data;
        if (this.size === 1) {
            this.header = null;
            this.tail = null;
        } else {
            this.header = this.header.next;
        }
        this.size--;
        return data;
    }

    contains(value) {
        let currentNode = this.header;
        while (currentNode) {
            if (currentNode.data === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value) {
        let currentNode = this.header;
        let index = -1;
        while (currentNode) {
            index++;
            if (currentNode.data === value) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    toString() {
        let data = "";
        let currentData = this.header;
        while (currentData !== null) {
            data = data + currentData.data + " → ";
            currentData = currentData.next;
        }
        data = data.concat("null");
        return data;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size) {
            this.append(value);
        } else {
            const node = new Node(value);
            let prevNode = null;
            let currentNode = this.header;
            let counter = 0;
            while (counter < index) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                counter++;
            }
            node.next = currentNode;
            prevNode.next = node;
            this.size++;
        }
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index === 0) {
            return this.removeFirst();
        } else if (index === this.size - 1) {
            return this.pop();
        } else {
            let prevNode = null;
            let currentNode = this.header;
            let counter = 0;
            while (counter < index) {
                prevNode = currentNode;
                currentNode = currentNode.next;
                counter++;
            }
            prevNode.next = currentNode.next;
            this.size--;
            return currentNode.data;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// CONSOLE TESTS

let pets = new LinkedList();
pets.append("Kitten"); // pets: Kitten
pets.append("Puppy"); // pets: Kitten Puppy
pets.append("Dog"); // pets: Kitten Puppy Dog
pets.append("Cat"); // pets: Kitten Puppy Dog Cat
pets.append("Fish"); // pets: Kitten Puppy Dog Cat Fish
console.log(`toString(): ${pets.toString()}`); // Kitten -> Puppy -> Dog -> Cat -> Fish -> null
// console.log(pets.size);
// console.log(pets.header);
// console.log(pets.tail);
console.log(`sizeOfList(): ${pets.sizeOfList()}`); // 5
console.log(`head(): ${pets.head()}`); //Kitten
console.log(`tailNode(): ${pets.tailNode()}`); // Fish

console.log(`at(2): ${pets.at(2)}`); // Dog
console.log(`pop(): ${pets.pop()}`); // Fish
console.log(`contains('Dog'): ${pets.contains("Dog")}`); // true
console.log(`find('Dog'): ${pets.find("Dog")}`); // 2

console.log(`toString(): ${pets.toString()}`); // Kitten -> Puppy -> Dog -> Cat -> null
console.log(`contains('Fish'): ${pets.contains("Fish")}`); // false
