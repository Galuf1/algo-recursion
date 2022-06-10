exports.factorial = function(x) {
    if (x === 1){
        return 1
    } else {
        return (x * factorial(x-1))
    }

};

exports.palindrome = function(word) {
        originalWord = word.toString().toLowerCase().replace(/[^a-zA-z0-9]/g, "").split('')//.join('')
    
        if (originalWord.length == 1) {
            return true
        } else {
            let left = originalWord.shift()
            // console.log(left)
            let right = originalWord.pop()
            // console.log(right)
            if (left  == right) {
                return palindrome(originalWord.join(''))
            }
        } return false
};

exports.bottles = function(num, total = 1) {
        if(num === 1){
            let atOneBottle = `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, ${total} bottles of beer on the wall.`
            return atOneBottle
        } else {
            let minusOne = `${num} bottles of beer on the wall, ${num} bottles of beer.\n`
            let takeOneDown = `Take one down and pass it around, ${num - 1} bottles of beer on the wall.\n`
            if(num === 2){
                takeOneDown = `Take one down and pass it around, 1 bottle of beer on the wall.\n`
            }
            return minusOne + takeOneDown + bottleSong(num - 1, total + 1)
    
        }
};

exports.toRoman = (num) => {
    const map = new Map()
    map.set('M', 1000);
    map.set('CM', 900);
    map.set('D', 500)
    map.set('CD', 400)
    map.set('C', 100)
    map.set('XC', 90)
    map.set('L', 50)
    map.set('XL', 40)
    map.set('X', 10)
    map.set('IX', 9)
    map.set('V', 5)
    map.set('IV', 4)
    map.set('I', 1)
    if(num === 0){
        return ''
    } else {
        for(let [key, value] of map){
            while(num >= value){
                return key + toRoman(num - value)
            }  
        }
    }
};
