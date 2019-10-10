//======================================Problem Statement=============================================
// --->> Print all possible path to reach the end of the GRID/MAZE (N x N) from starting  point to ending point
// --->> One horizontal move will be represented by H and one vertical move will be represented by V
// --->> Complexity =  Complexity will be exponential as there are many overlapping solutions
// --->> cr = current row
// --->> cc = current column
// --->> er = end row
// --->> ec = end column

const getMazePath = (cr, cc, er, ec) => {
    if(cr == er && cc == ec) {              //============POSITIVE BASE CASE===========
        let br = [];
        br.push('');
        return br;
    }
    
    if(cr > er || cc > ec) {                //============NEGATIVE BASE CASE===========
        let br = [];
        return br;
    }
    
    let myResult = [];
    
    let recResultH = getMazePath(cr, cc + 1, er, ec);
    recResultH.forEach((rrh) => {
        myResult.push("H" + rrh);
    });
    
    let recResultV = getMazePath(cr + 1, cc, er, ec);
    recResultV.forEach((rrv) => {
        myResult.push("V" + rrv);
    }); 
    
    return myResult;
}

module.exports = { getMazePath };