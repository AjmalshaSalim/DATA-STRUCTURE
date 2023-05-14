class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    depthFirstSearch(startingVertex){
        const visited = new Set();

        const dfs= (vertex)=>{
            visited.add(vertex);
            console.log(vertex);

            let neighbors ;
            if(this.adjacencyList[vertex]){
                neighbors = this.adjacencyList[vertex];
            }else{
                return
            }
            
            for(let neighbor of neighbors ){
                if(!visited.has(neighbor)){
                    dfs(neighbor);
                }
            }
        }
        dfs(startingVertex);
    }

}

const graph = new Graph();

// graph.addVertex("1");
// graph.addVertex("2");
// graph.addVertex("3");
// graph.addVertex("4");
// graph.addVertex("5");
// graph.addEdge("1", "2");
// graph.addEdge("1", "3");
// graph.addEdge("2", "4");
// graph.addEdge("2", "5");

graph.addVertex("1")
graph.addVertex("2")
graph.addVertex("4")
graph.addVertex("3")
graph.addVertex("5")
graph.addVertex("6");
graph.addEdge("1", "2")
graph.addEdge("1", "3")
graph.addEdge("2", "4")
graph.addEdge("5", "6")

graph.depthFirstSearch("1"); //1 2 4 5 3