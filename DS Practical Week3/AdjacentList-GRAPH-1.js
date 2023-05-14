class graph{
    constructor(){
        this.adjacentlist={};
    }
    addVertex(value){
        if(!this.adjacentlist[value]){
            this.adjacentlist[value]=new Set();
        } }

addEdges(value1,value2){
    if(!this.adjacentlist[value1]){
        this.addVertex(value1)
    }
    if(!this.adjacentlist[value2]){
        this.addVertex(value2)
    }
   this.adjacentlist[value1].add(value2) 
   this.adjacentlist[value2].add(value1)
}

removeEdges(value1,value2){
    this.adjacentlist[value1].delete(value2);
    this.adjacentlist[value2].delete(value1);
}

removevertex(vertex){
    if(!this.adjacentlist[vertex]){
        return
    }
    for(let i of this.adjacentlist[vertex]){
        this.removeEdges(vertex,i)
    }
    delete this.adjacentlist[vertex]
}
}
let v=new graph();
v.addVertex('A');
v.addVertex('B');
v.addVertex('C');
v.addEdges('A','B');
v.removeEdges('A','B');
v.removevertex('A');
console.log(v);