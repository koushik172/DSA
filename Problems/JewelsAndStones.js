var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let map = new Map();
    jewels = jewels.split('')
    jewels.forEach(function(item){map.set(item, item)})
    
    for(let i=0; i<stones.length; i++) {
        if(map.has(stones[i])) {
            count++
        }
    }
    return count
  };
  
  numJewelsInStones("aA", "aAAbbbb")