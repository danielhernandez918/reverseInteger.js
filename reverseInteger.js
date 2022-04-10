/**
 * @param {number} x
 * @return {number}
 */
//  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

//  Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
x1 = 123
x2 = -123
x3 = 120
x4 = 901000
x5 = 50078
x6 = 1534236469

var reverse = function(x) {
    if (x > 2**31) {
        let number = 0;
        return number
    }
    const arr = Array.from(String(x));
    // console.log(arr);
    const revArr = [];
    for (let i = arr.length-1; i>=0; i--) {
        if (arr[i]!=0 && arr[i]!= '-' ) {
            revArr.push(arr[i]);
        }
        else if (arr[i]==0 && revArr[0] > 0) {
            revArr.push(arr[i]);
        }
    }
    let number = revArr.join("")
    if (number > 2**31) {
        number = 0;
        return number
    }
    if (x <0) {
        number = Math.abs(number)*-1;
    }
    return number;
};
console.log(reverse(x1))
console.log(reverse(x2))
console.log(reverse(x3))
console.log(reverse(x4))
console.log(reverse(x5))
console.log(reverse(x6))

