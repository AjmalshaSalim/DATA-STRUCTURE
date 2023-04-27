class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class list{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    insert(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            let current=this.tail;
            current.next=node;
            node.prev=current;
            this.tail=node;
        }
        this.size++;
    }
    insertA(array){
        for(let x of array){
            this.insert(x);
        }
    }
    insertArray(array){
        for(let i=0;i<array.length;i++){
            let node=new Node(array[i]);
            if(!this.head){
                this.head=node;
                this.tail=node;
                this.size++;
            }else{
                let curr=this.tail;
                curr.next=node;
                node.prev=curr;
                this.tail=node;
                this.size++;

            }
        }
    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
}
let array=[1,2,3,4,5,6];
let ll=new list();
//ll.insertArray(array);
ll.insertA(array);
ll.print();
console.log(ll);