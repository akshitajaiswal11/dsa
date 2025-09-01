// A company is issuing total_shares shares during an IPO.
// There are n bidders. Each bidder submits a bid with 4 values:

// [bidder_id, shares_requested, bid_price, timestamp]

// Allocation Rules:

// Higher Price Priority
// Bids with a higher bid_price are served before lower ones.

// Earlier Timestamp Priority
// If multiple bidders offer the same bid_price, the one with the earlier timestamp is served first.

// Round-Robin for Exact Tie (price & timestamp)
// If multiple bidders have the same bid_price and timestamp, the shares are distributed one at a time in a round-robin fashion among them until:

// all total_shares are allocated, or

// all bidders in the tie group are fully satisfied.

// Final Output
// Return the list of bidder_ids who did not receive all the shares they requested, sorted in ascending order.

// Example 1
// total_shares = 5
// bids = [
//   [1, 3, 100, 1],
//   [2, 2, 100, 2],
//   [3, 1,  90, 1]
// ]

// Process:

// Bidder 1 (3 @100, t=1) → gets 3 shares (left = 2)

// Bidder 2 (2 @100, t=2) → gets 2 shares (left = 0)

// Bidder 3 (1 @90, t=1) → no shares left

// Result:

// Unsuccessful bidder = [3]

// Example 2 (round-robin tie)
// total_shares = 3
// bids = [
//   [1, 2, 100, 1],
//   [2, 2, 100, 1]
// ]

// Process:

// Both bidders tied (same price & timestamp).

// Round-robin:

// Bidder 1 → 1 share (left = 2)

// Bidder 2 → 1 share (left = 1)

// Bidder 1 → 1 share (left = 0)

// Bidder 2 still needs 1 more but no shares left.

// Result:

// Unsuccessful bidder = [2]


function allocateShares(bids, total_shares) {
    // Higher Price Priority. Bids with a higher bid_price are served before lower ones.
    //1. we want to sort based on higher prices that is bids[2]

    // Earlier Timestamp Priority. If multiple bidders offer the same bid_price, the one with the earlier timestamp is served first.
    //2. once sorted by higher price we want to sort by lower timestamp

    //if b.price > a.price b will come before a, if both same price, sort on timestamp, if b.timestamp < a.timestamp, b will come first

    //bidPrice --> descending
    //timestamp --> ascending

    let map = new Map();
    bids.sort((a, b) => {
        if (a[2] !== b[2]) return b[2] - a[2]
        else return a[3] - b[3]
    })
    console.log(bids)

    let i = 0
    while( i<bids.length && total_shares > 0) {
        let j = i;
        while (j < bids.length && bids[j][2] === bids[i][2] && bids[j][3] === bids[i][3]) {
            //create a group of same price and timestamp
            j++;
        }
        
        if (j - i === 1) {
            //means only 1 in group, allocate the asked shares
            let given = Math.min(bids[i][1], total_shares);
            // the get condition is addedd if the bidder comes again to big with diff price and shares
            let currAllocatedShares = map.get(bids[i][0]) || 0;

            map.set(bids[i][0], currAllocatedShares + given);
            total_shares = total_shares - given;
        }
        else{
            //do round robin, allot 1 to each in group until all get fulfilled or total shares exahust
            let group = bids.slice(i,j);
            
            while(total_shares > 0){
                let change = false;
                for(let k = 0; k<group.length && total_shares > 0 ; k++){
                    let currAllocatedShares = map.get(group[k][0]) || 0;
                    if(currAllocatedShares < group[k][1]){
                        map.set(group[k][0], currAllocatedShares + 1);
                        total_shares--;
                        change = true;
                    }

                }
                //if nothing changed means all got their shares, come out of loop
                if(!change) break;
            }
        }
        i = j;
    }
    console.log(map)
    for(let i = 0; i<bids.length; i++){
        if(bids[i][1] !== map.get(bids[i][0]))
            console.log(bids[i][0])
    }
}
let total_shares = 2;
let bids = [
  [1, 5, 120, 1],  // high price
  [2, 3, 100, 2],
  [3, 1, 90, 3]
];


allocateShares(bids, total_shares)
