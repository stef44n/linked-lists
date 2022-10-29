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

    // function size() {}
    sizeOfList() {
        return this.size;
    }

    // function head() {}
    head() {
        return this.header;
    }

    tailNode() {
        return this.tail;
    }
    // function tail() {}
    // function at(index) {}
    // function pop() {}

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
    // function find(value) {}
    toString() {
        let data = "";
        let currentData = this.header;
        while (currentData !== null) {
            data = data + currentData.data + " ";
            currentData = currentData.next;
        }
        return data;
    }
}

// let defaultValue = null;
// let defaultNextNode = null;
// let currentValue = null;

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
// 6
// 7 pop -
// 8
// 9
// 10 toString -

let conga = new LinkedList();
conga.append("Kitten");
conga.append("Puppy");
conga.append("Dog");
conga.append("Cat");
conga.append("Fish");
// console.log(conga.size);
// console.log(conga.header);
// console.log(conga.tail);
console.log(conga.sizeOfList());
console.log(conga.head());
console.log(conga.tailNode());

console.log(conga.pop());
console.log(conga.toString());
