class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
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

function mergeTwoSortedList(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    let head = null;
    if(l1.data < l2.data){
        head = l1;
        l1 = l1.next;
    }
    else{
        head = l2;
        l2 = l2.next;
    }

    let current = head;
    while(l1 && l2){
        if(l1.data < l2.data){
            current.next = l1;
            l1 = l1.next;
        }
        else{
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if(l1) current.next = l1;
    if(l2) current.next = l2;
    return head;
}
let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(4);

let head2 = new Node(1);
head2.next = new Node(3);
head2.next.next = new Node(4);

print(head1);
print(head2)

print(mergeTwoSortedList(head1, head2));