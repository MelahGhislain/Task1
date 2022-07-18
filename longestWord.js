/**   
 * Task
  - Get longest word
  - If words are of equal lenght return the word with highest number of vowels
*/

// returns the longest word from a given sentence
function findLongestWord(sentence){
    // creates an array of words from a given sentence
    const arr = sentence.split(" ")
    let longest = arr[0]
    for (i = 1; i < arr.length; i++){
        const strStrip = arr[i].replace(/[^a-zA-Z ]/g, "");

        if(strStrip.length > longest.length || strStrip.length === longest.length){

            if(strStrip.length === longest.length){
                longest = getLongestWithVowels(strStrip, longest)
            }else{
                longest = strStrip;
            }
        }
    }
    return longest
}

// returns the longest word with the highest number of vowels
function getLongestWithVowels(str1, str2){
    if(countVowels(str1) > countVowels(str2)){
        return str1
    }
    return str2
}


// returns the total number of vowels in a string
function countVowels(str){
    return str.match(/[aeiou]/g).length;
}







const str = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"


console.log(findLongestWord(str))
