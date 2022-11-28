
// if the array contains duplicates return true else return false//

// var nums = [1,2,3,1]

// var containsduplicates = function(s) {
//     for (i = 0; i < s.length; i++) {
//         for (j = 0; j < i; j++) {
//             if (s[j] === s[i])
//                 return true;
//         }
//     }
//     return false;
// }

// console.log(containsduplicates(nums));

    var numbers = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
    // var numbers = [1, 2, 3, 4]

    var duplicates = function(x) {
        for (i = 0; i < x.length; i++) {
            for (j = 0; j < i; j++) {
                if (x[j] == x[i])
                    return true;
            }
        }
        return false;
    }

    console.log(duplicates(numbers));