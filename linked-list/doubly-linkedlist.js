class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtStart(value) {
        const node = new Node(value);
        if (!this.head && !this.tail) this.head = this.tail = node;
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    insertAtEnd(value) {
        const node = new Node(value);
        if (!this.head && !this.tail) this.head = this.tail = node;
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    deleteByValue(value) {
        if (!this.head) {
            console.log("Empty list");
            return;
        }
        let current = this.head;
        while (current) {
            if (current.data === value) {
                if (current.prev == null && current.next == null) {
                    //only 1 node
                    this.head = this.tail = null
                }
                else if (current.prev == null) {
                    //delete head
                    current.next.prev = null;
                    this.head = current.next;

                } else if (current.next == null) {
                    current.prev.next = null;
                    this.tail = current.prev;

                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                return;
            } else {
                current = current.next;
            }
        }


        console.log("value not found");
    }

    print() {
        if (!this.head) console.log("List is empty");
        let current = this.head;
        let result = `null <-> `;
        while (current != null) {
            result += `${current.data} <-> `;
            current = current.next;
        }
        console.log(`${result}null`);
    }
}

const dll = new DLinkedList();
dll.insertAtStart(5);

dll.insertAtEnd(2);

dll.insertAtStart(7);

dll.insertAtEnd(11);

dll.print()

dll.deleteByValue(5);
dll.print()
dll.deleteByValue(7);
dll.print()
dll.deleteByValue(11);
dll.print()
dll.deleteByValue(2);
dll.print()