
// if the array contains duplicates return true else return false//

var nums = [1,2,3,1]

var containsduplicates = function(s) {
    for (i = 0; i < s.length; i++) {
        for (j = 0; j < i; j++) {
            if (s[j] === s[i])
                return true;
        }
    }
    return false;
}

console.log(containsduplicates(nums));