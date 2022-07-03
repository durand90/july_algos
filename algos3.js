

/* given an integer array "nums", return true if any value appears at least twice in the array and return
false if every element is distinct*/

let nums = [1,2,3,1]

var containduplicate = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] === nums[i])
                return true;
        }

    }
    return false;
}

console.log(containduplicate(nums))