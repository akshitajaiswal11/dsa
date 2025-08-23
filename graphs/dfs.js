const graph = new Map();
graph.set('0', ['1', '2']);
graph.set('1', ['0', '3']);
graph.set('2', ['0', '3']);
graph.set('3', ['1', '2']);

function dfs(graph, start, visited = new Set(), result = []) {
    visited.add(start);
    result.push(start);
    for (let neighbors of graph.get(start)) {
        if (!visited.has(neighbors)) dfs(graph, neighbors, visited, result)
    }
    return result;
}

function dfsRecursice(graph, start){
    let stack = [start];
    let visited = new Set();
    let result = [];
    visited.add(start)
    while(stack.length){
        let node = stack.pop();
        result.push(node);
        for(let neighbors of graph.get(node).reverse()){
        
            if(!visited.has(neighbors)) {
                visited.add(neighbors);
                stack.push(neighbors);
            }
        }
    }
    console.log(result);
}

console.log(dfs(graph, '0'));

dfsRecursice(graph, '0')