class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v]= []
        }
    }

    addEdges(v1,v2){
        if(!this.adjacencyList[v1]){
            this.addVertex(v1);
         }  
         if(!this.adjacencyList[v2]){
            this.addVertex(v2);
         }  
         this.adjacencyList[v1].push(v2);
         this.adjacencyList[v2].push(v1);
    }

    breadthFirstSearch(startv){
        let visited = new Set();
        const queue = [startv];
        visited.add(startv)

        while(queue.length){
            let vertex = queue.shift();
            console.log(vertex);

            const neighbors = this.adjacencyList[vertex];
            for(const neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor)
                }
            }
        }
    }

    display(){

        for(let i in this.adjacencyList){
            console.log(i+"->"+this.adjacencyList[i]);
        }

    }
}

const graph = new Graph();

graph.addVertex("1")
graph.addVertex("2")
graph.addVertex("4")
graph.addVertex("3")
graph.addVertex("5")
graph.addVertex("6");
graph.addEdges("1", "2")
graph.addEdges("1", "3")
graph.addEdges("2", "4")
graph.addEdges("5", "6")

graph.display()
console.log("----------------");
graph.breadthFirstSearch("1");