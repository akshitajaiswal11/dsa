class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class CLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertAtStart(value){
        const node =  new Node(value);

        if(!this.head) {
            this.head = this.tail = node;
            node.next = this.head;
        }

        else {
            node.next = this.head;
            this.head = this.tail.next = node; 
        }
    }
     insertAtEnd(value){
        const node =  new Node(value);

        if(!this.head) {
            this.head = this.tail = node;
            node.next = this.head;
        }
        else{
            this.tail.next = node;
            node.next = this.head;
            this.tail = node;
        }
    }

    insertAtPosition(value, position){
        const node =  new Node(value);

        if(!this.head) {
            this.head = this.tail = node;
            node.next = this.head;
            return;
        }else if(position === 1){
            //insert at head
            this.insertAtStart(value)
        }else{
            let curpos = 1;
            let current = this.head;
            while(current.next != this.head && curpos < position -1){
                current = current.next;
                curpos++;
            }

            node.next = current.next;
            current.next = node;
            
        }
        
    }

    deleteAtStart(){
        if(!this.head) {
            console.log("List is empty")
            return;
        }
        else if(this.head.next == this.head ){
          
            //1 node
            this.head = this.tail = null;
            return;
        }
        else{
            this.tail.next = this.head.next;
            this.head = this.head.next;
        }
    }

    deleteAtEnd(){
        if(!this.head) {
            console.log("List is empty")
            return;
        }
        else if(this.head.next == this.head ){
          
            //1 node
            this.head = this.tail = null;
            return;
        }
        else{
            let current = this.head;
            while(current.next != this.tail){
                current = current.next;
            }
            current.next = this.head;
            this.tail = current;
        }
    }

    print(){
        if(!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        let result = ``;
        do{
            result += `${current.data} -> `;
            current = current.next;

        }while(current != this.head)
        console.log(`${result} (head)`)
        //console.log("head", this.head);
        //console.log("tail", this.tail)
    }
}

const cll = new CLinkedList();
cll.insertAtStart(5);
cll.insertAtStart(6);
cll.insertAtEnd(7);
cll.insertAtEnd(8);
cll.insertAtStart(4)
//cll.insertAtPosition(12, 1);
cll.print();
cll.insertAtPosition(11,1);

cll.print();

cll.insertAtPosition(12, 2)
cll.insertAtPosition(14, 7)
cll.insertAtPosition(15,15)
cll.insertAtPosition(16, 4)
cll.print();

cll.deleteAtStart();
cll.print()
cll.deleteAtEnd();
cll.print()