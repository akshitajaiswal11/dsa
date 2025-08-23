const graph =  new Map();
graph.set('0', ['1','2']);
graph.set('1', ['0', '3']);
graph.set('2', ['0', '3']);
graph.set('3', ['1','2']);

function bfs(graph, start){
    const visited = new Set();
    let queue = [start];
let result = []

    visited.add(start)
    while(queue.length){
        const node = queue.shift();
        result.push(node);
        for(let neighbors of graph.get(node)){
            if(!visited.has(neighbors)){
                visited.add(neighbors)
                queue.push(neighbors);
            }
        }
    }
return result
}

console.log(bfs(graph, '0'))

