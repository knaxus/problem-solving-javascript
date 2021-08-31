function parentheses(s) {
    if(typeof s !== "string" || s.length % 2 !== 0) return false;
    let i = 0;
    let arr = [];
    while(i<s.length) {
        if(s[i]=== "{" || s[i]=== "(" || s[i]=== "[") {
           arr.push(s[i]);
        }
        else if(s[i] === "}" && arr[arr.length-1] === "{") {
            arr.pop();
        }
        else if(s[i] === ")" && arr[arr.length-1] === "(") {
            arr.pop();
        }
        else if(s[i] === "]" && arr[arr.length-1] === "[") {
            arr.pop();
        }
        return "Unbalanced";

        i++
    }
    if (arr.length === 0)
    return "Balanced";
};



module.exports = {
  parentheses,
  };
