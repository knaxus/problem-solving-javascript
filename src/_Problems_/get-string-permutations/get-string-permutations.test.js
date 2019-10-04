// GET PERMUTAION OF A GIVEN STRING

let getPermutation = (str) => {
    if (str.length == 1) {                          // BASE CASE
        let array = [];
        array.push(str);
        return array;
    }

    let currentCharacter = str.charAt(0);
    let restOfString = str.substring(1);
    let result = [];
    let returnResult = getPermutation(restOfString);
    for (j = 0; j < returnResult.length; j++) {
        for (i = 0; i <= returnResult[j].length; i++) {
            let value = returnResult[j].substring(0, i) + currentCharacter + returnResult[j].substring(i);
            result.push(value);
        }
    }
    return result;
}

let permutation = getPermutation('abc');
console.log(permutation);