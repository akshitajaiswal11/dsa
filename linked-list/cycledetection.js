class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function print(head){
    let temp = head;
    let result = ``;
    while(temp && temp.next !== head){
        result += `${temp.data} -> `
        temp = temp.next;
    }
    console.log(`${result}null`);
}

function detectCylce(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
        if(slow == fast) return true;
    }
    return false;
}
let head = new Node(11);
head.next = new Node(12);
head.next.next = new Node(5);
//head.next.next.next = head.next;
console.log(detectCylce(head));