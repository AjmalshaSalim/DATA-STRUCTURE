class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class list{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    add(value){
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            let current=this.tail;
            current.next=node;
            this.tail=node;
        }
        this.size++;
    }
    addA(array){
        for(let i=0;i<array.length;i++){
            let node=new Node(array[i]);
            if(!this.head){
                this.head=node;
                this.tail=node;
            }else{
                let current=this.tail;
                current.next=node;
                this.tail=node;
            }
            this.size++;
        }
    }
    convertA(array){
        let current=this.head;
        let x=0;
        while(current){
            
            array[x]=current.value;
current=current.next;
x++;
        }

    }
    print(){
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next;
        }
    }
    arrayins(array){
for(let x of array){
    this.add(x);
    x++;
}
    }
    removetail(){
        let current=this.head;
        let prev;
        while(current!=this.tail){
            prev=current;
            current=current.next;
        }
this.tail=prev;
prev.next=null;
this.size--;
    }
}
let ll=new list();
ll.add(111);
ll.add(222);
ll.add(333);
ll.add(444);
let array=[1,2,3,4,5];
let newarray=[];
ll.addA(array);
ll.convertA(newarray);
newarray.sort((a,b)=>b-a);
console.log(newarray);
ll.removetail();
ll.print();
