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
    // function contains(value) {}

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
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 1 append -
// 2 prepend -
// 3 size -
// 4 head -
// 5 tail -
// 6 at -
// 7 pop -
// 8
// 9 find -
// 10 toString -

let conga = new LinkedList();
conga.append("Kitten");
conga.append("Puppy");
conga.append("Dog");
conga.append("Cat");
conga.append("Fish");
console.log(`toString(): ${conga.toString()}`);
// console.log(conga.size);
// console.log(conga.header);
// console.log(conga.tail);
console.log(`sizeOfList(): ${conga.sizeOfList()}`);
console.log(`head(): ${conga.head()}`);
console.log(`tailNode(): ${conga.tailNode()}`);

console.log(`at(2): ${conga.at(2)}`);
console.log(`pop(): ${conga.pop()}`);
console.log(`find('Dog'): ${conga.find("Dog")}`);
console.log(`toString(): ${conga.toString()}`);
