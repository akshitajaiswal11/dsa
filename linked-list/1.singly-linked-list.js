class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertAtEnd(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.print();
            return;
        }
        let current = this.head;
        while (current.next) current = current.next;
        current.next = node;
        this.print();
    }

    insertAtHead(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.print();
            return;
        }
        node.next = this.head;
        this.head = node;
        this.print();
    }

    deleteByValue(value) {
        if (!this.head) {
            console.log("Linked list is empty");
            return;
        }
        if (this.head.data == value) {
            this.head = this.head.next;
            this.print();
            return;
        }
        let prev = null;
        let current = this.head;
        while (current && current.data !== value) {
            prev = current;
            current = current.next;
        }
        if (!current) {
            console.log(`Value: ${value} not found in linked list`);
            return;
        }
        prev.next = current.next;
        this.print();
    }

    deleteByPosition(position) {
        if (!this.head) {
            //empty
            console.log("Linked list is empty");
            return;
        }

        if (position === 0) {
            //remove head
            this.head = this.head.next;
            this.print();
            return;
        }
        let prev = null;
        let current = this.head;
        let count = 0;
        while (current && count != position) {
            prev = current;
            current = current.next;
            count++;
        }
        if (!current) {
            //element not found;
            console.log("Position: out of bounds");
            return;
        }
        prev.next = current.next;
        this.print()
    }

    search(value) {
        if (this.head.data === value) return true;
        let current = this.head.next;
        while (current && current.data != value) {
            current = current.next;
        }
        if (!current) return false;
        return true;
    }
    print() {
        if (!this.head) {
            console.log("Linked list in empty");
            return;
        }
        let result = ``;

        let current = this.head;
        while (current) {
            result += `${current.data} -> `
            current = current.next;
        }
        console.log(`${result} null`);


    }
}


let ll = new LinkedList();
ll.print();
ll.insertAtEnd(10);
ll.insertAtEnd(20);

ll.insertAtEnd(30);
ll.insertAtEnd(40);
ll.insertAtHead(50);
ll.deleteByValue(30);
ll.deleteByValue(20);
ll.deleteByValue(10);
ll.deleteByValue(10);
ll.deleteByValue(50);
ll.deleteByValue(40);
ll.deleteByValue(20);
ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
console.log(ll.search(50));

console.log(ll.search(60));

console.log(ll.search(40));
ll.deleteByPosition(1);

ll.deleteByPosition(5);

ll.deleteByPosition(1);
ll.deleteByPosition(0);


