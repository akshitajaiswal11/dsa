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

function reverse(head){
    let prev = null;
    let current = head;
    while(current){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev; //current is now null
}
let head = new Node(11);
head.next = new Node(5);
head.next.next = new Node(1);
print(head);
head = reverse(head);
print(head);