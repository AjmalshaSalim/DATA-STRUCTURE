let array = [1, 2, 3, 4, 5, 6, 7];
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class list {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addAtTail(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    addAtHead(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    DeleteTail() {
        let current = this.head;
        while (current.next != this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
    }


    DeleteHead() {
        this.head = this.head.next;
    }


    DeleteTarget(target) {
        let current = this.head;
        while (current.next.value !== target) {
            current = current.next;
        }
        current.next = current.next.next;
    }


    DeleteTargetDuplicates(target){
        let current=this.head;
        let prev;
        while(current){
        if(current.value==target){
        if(prev===null){
        this.head=current.next;
        }else{
        prev.next=current.next;
        }
        }else{
        prev=current;
        }
        current=current.next;
        }
        }



        DeleteAllDuplicates(){
            let current=this.head;
           while(current){
           let run=current;
           while(run.next){
           if(current.value===run.next.value){
           run.next=run.next.next;
           }else{
           run=run.next;
           }
           }
           current=current.next;
           }
           }


           LinkedToArray(array){
            let current=this.head;
            while(current){
            array.push(current.value);
            current=current.next;
            }
            }



            ArrayToLinked(array){
                for(let i=0;i<array.length;i++){
                let node=new Node(array[i]);
                if(!this.head){
                this.head=node;
                this.tail=node;
                }else{
                this.tail.next=node;
                this.tail=node;
                }
                }
            }


    sumOfLinked() {
        let current = this.head;
        let total = 0;
        while (current) {
            total = total + current.value;
            current = current.next;
        }
        console.log("Sum is : "+total);
    }

    
FindMid(){
    let slow=this.head;
    let fast=this.head;
    while(fast&&fast.next){
    slow=slow.next;
    fast=fast.next.next;
    }
    let mid=slow.value;
    console.log("mid is : "+mid);
    }
    

    ReverseLinked(){
        let current=this.head;
        let prev=null;
        while(current){
        let next=current.next;
        current.next=prev;
        prev=current;
        current=next;
        this.head=prev;
        }
        
        }



        printBetweenThree(){
            let current=this.head;
            let flag=0;
            while(current){
                if(flag>2){
                    flag=0;
                }
            if(flag==0){
                console.log(current.value);
            }
                current=current.next;
            flag++;
            }}


    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }




}

let ll = new list();
ll.addAtTail(333);
ll.addAtTail(444);
ll.addAtTail(555);
ll.addAtTail(666);
ll.addAtTail(777);
//ll.addAtTail(333);
//ll.addAtTail(666);
ll.addAtTail(999);
//ll.ArrayToLinked(array);
//ll.sumOfLinked();
// ll.DeleteTail();
// ll.DeleteHead();
//ll.DeleteTarget(666);
//ll.DeleteTargetDuplicates(666);
//ll.DeleteAllDuplicates();
// console.log(ll);
//ll.LinkedToArray(array);
//console.log(array);
//ll.FindMid();
//ll.ReverseLinked();
ll.printBetweenThree();
//ll.print();

