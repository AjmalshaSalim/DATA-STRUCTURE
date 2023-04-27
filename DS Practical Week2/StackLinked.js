class Items{
    constructor(value){
        this.value=value;
        this.next= null;
    }
}
class stack{
    constructor(){
    this.head=null;
    this.tail=null;
    }
    add(value){
        let items=new Items(value);
        if(!this.head){
            this.head=items;
            this.tail=items;
        }else{
            items.next=this.head;
            this.head=items;
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
let st=new stack();
st.add(777);
st.add(888);
st.add(999);
st.print();