function checkNumber(num) {
    if(num > 0){
         return "Positive" 
    }else if(num < 0){
        return "Negative"
    }else {
        return "Zero"
    }
    return num
}

console.log(checkNumber(0)); //should return Positive.

module.exports = checkNumber;
