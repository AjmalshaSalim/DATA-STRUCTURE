class Node{
constructor(value){
    this.value=value;
    this.next=null;
}
}
class linkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    insertHead(data){
        const node=new Node(data);
        if(!this.head){
            this.head=node;
            this.tail=node;
            this.size++;
        }else{
            node.next=this.head;
            this.head=node;
            this.size++
        }
    }

    insertAt(pre,data){
        const node=new Node(data);
        let current,previous;
        current =this.head;
        while(current.value!=pre&&current!=null){
            previous=current;
            current=current.next; 
        }
        console.log(previous);
        previous.next=node;
        node.next=current;
        this.size++
        return;
    }
    print(){
        let cur=this.head;
        if(!this.head){
            console.log("no data found");
            return;
        }else{
        while(cur){
            console.log(cur.value);
            cur=cur.next
        }}
    }
    delete(value){
        if(!this.head){
            console.log("empty");
        }
        let temp=this.head;
        if(temp.value==value){
            let a=temp
            temp.next=this.head;
            a=null
        }else{
            while(temp!=value){
                if(temp.next==value){
                    temp.next=temp.next.next;
                }
                temp=temp.next;

            }

        }
        
        

    }

}
 
const list=new linkedList()
list.insertHead(10);
list.insertHead(20);
list.insertHead(30);
list.insertAt(20,69);
list.delete(20);
list.print();


