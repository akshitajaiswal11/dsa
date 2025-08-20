function mergeIntervals(intervals){
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    let result = [intervals[0]];
    for(let i = 1 ; i<intervals.length; i++){
        let lastInterval = result[result.length-1];
        if(lastInterval[1] > intervals[i][0]){
            lastInterval[1] = Math.max(lastInterval[1], intervals[i][1])
        }
        else result.push(intervals[i]);
    }
    console.log(result)
}

mergeIntervals([[1,9],[12,16],[8,10],[15,18]])