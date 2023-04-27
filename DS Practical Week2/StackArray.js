class Stack{
    constructor(){
        this.items=[]
    }
add(items){
    this.items.push(items);
}
delete(){
    return this.items.pop();
}
print(){
     console.log(this.items);
}
}
let stack=new Stack();
stack.add(555);
stack.add(666);
stack.add(777);
stack.add(888);
stack.delete();


stack.print();
//console.log(stack);