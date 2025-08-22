class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next || null;
    }
}

function print(head) {
    let temp = head;
    let result = ``;
    while (temp) {
        result += `${temp.data} -> `
        temp = temp.next;
    }
    console.log(`${result}null`);
}

function removeNthNode(head, n) {
    //create dummy node
    let dummy = new Node(0, head);
    let slow = dummy;
    let fast = dummy;
    for (let i = 0; i <= n; i++) {
        fast = fast.next //move ahead n+1
    }
    while(fast){
        slow = slow.next
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
print(head);
removeNthNode(head, 2);
print(head);