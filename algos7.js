var containsDuplicate = function(nums) {
    for(i = 0; i < nums.length; i++) {
        for(j = 0; j < i; j++) {
            if(nums[i] == nums[j]) 
            return true;
        }
    }
    return false;
}

nums = [1,2,4,1]

console.log(containsDuplicate(nums));