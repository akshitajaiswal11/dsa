class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function print(head){
    let temp = head;
    let result = ``;
    while(temp){
        result += `${temp.data} -> `
        temp = temp.next;
    }
    console.log(`${result}null`);
}

function findMiddle(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
print(head);
console.log(findMiddle(head));