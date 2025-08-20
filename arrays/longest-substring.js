function longestSubstrWithoutRepeat(str) {
    let left = 0;
    let set = new Set();
    let maxLen = 0;
    let pointers = [0,0]
    for (right = 0; right < str.length; right++) {
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }
        set.add(str[right]);

        if(maxLen < right-left+1){
            pointers = [left, right];
        }
        maxLen = Math.max(maxLen, right - left + 1)
    }
    console.log(str.substring(pointers[0], pointers[1]+1));
    console.log(maxLen);
}
longestSubstrWithoutRepeat("abcabcbb");