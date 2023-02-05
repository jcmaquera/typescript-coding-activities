import * as assert from 'assert';


function endZeros(a: number): number {
    // your code here

    let count = 0;
    let numString = a.toString();
    for (let i = numString.length - 1; i >= 0; i--) {
        if (numString[i] == '0') {
        count++;
        } else {
        break;
        }
    }
    
    return count;
    
}


console.log(endZeros(10100));

// These "asserts" are used for self-checking
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(100), 2);
assert.strictEqual(endZeros(1000), 3);