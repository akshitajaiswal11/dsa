class Graph{
    constructor(){
        this.adjList = new Map();
    }

    addVertex(vertex){
        if(!this.adjList.has(vertex)) this.adjList.set(vertex, []);
    }

    addEdge(v1, v2){
        this.adjList.get(v1).push(v2);
        this.adjList.get(v2).push(v1);
    }
    
    print(){
        for(let [vertex, neighbors] of this.adjList.entries()){
            console.log(vertex, neighbors);
        }
    }
}

const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(0,1);
graph.addEdge(1,2);
graph.addEdge(0,2)
graph.print()