
// var s = "moma";
// var t = "aymom";


// var isAnagram = function(s, t) {

// if (s.length != t.length) return false;

// s = s.split("").sort().join("");
// t = t.split("").sort().join("");
// if (s === t) return true;
// return false;
// }
//  console.log(isAnagram(s, t));



var s = "a man, a plan, a canal: Panama";

var isPalindrone = function(s) {

    s = s.toLowerCase().replace(/[\W]/g, "").split("");
    if (s.join("") === s.reverse().join(""))
        return true;
        return false;
}
console.log(isPalindrone(s));