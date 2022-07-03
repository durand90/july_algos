

/* given two strings "s" and "t", return true if t is an anagra, of s,
and false otherwise */
/* an anagram is a word or phrase formed by rearranging the letters of a different word or phrase
typically using the original letters exctly once */

var s = "tara";
var t = "rat";

var isAnagram = function(s, t) {

    if (s.length != t.length) return false;
    
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    if (s === t) return true;
    return false;
    }

    console.log(isAnagram(s, t));