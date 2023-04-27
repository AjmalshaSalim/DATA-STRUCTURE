

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
    insert(data){
        const node = new Node(data);
        if(!this.head){
            this.head=node;
            this.tail=node;
            this.size++
        }else{
            let current=this.tail;
            current.next=node;
            this.tail=node;
            this.size++
        }
    }

    insertArray(array){
        for(let i=0;i<array.length;i++){
            const node=new Node(array[i]);
            if(!this.head){
                this.head=node;
                this.tail=node;
                this.size++
            }else{
                let current=this.tail;
                current.next=node;
                this.tail=node;
                this.size++
            }
        }
    }

    print(){
        let curr=this.head
        while(curr){
            console.log(curr.value);
            curr = curr.next
        }
    }
}
const array=[1,2,3,4,5,6,7,8];
const l=new list();
l.insertArray(array);
l.print();