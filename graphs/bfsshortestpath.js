const graph =  new Map();
graph.set('0', ['1','2']);
graph.set('1', ['0', '3']);
graph.set('2', ['0', '3']);
graph.set('3', ['1','2']);

function shortestPath(graph, start){
    let visited  = new Set();
    let distance = new Map();
    for(let [node] of graph.entries()){
        distance[node] = Infinity;
    }
    let queue = [start];
    visited.add(start);
    distance[start] = 0;
    console.log(distance);
    console.log(visited);
    while(queue.length){
        const node = queue.shift();
        for(let neighbors of graph.get(node)){
            if(!visited[neighbors]){
                const dist = distance[node] + 1;
                if(dist < distance[neighbors]){
                    distance[neighbors] = dist;
                }
                visited[neighbors] = true;
                queue.push(neighbors)
            }
        }
    }
    console.log(distance)
}
shortestPath(graph, '0')