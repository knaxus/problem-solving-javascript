function caesarCipher(toEncipher, shift = 0) {
    // If required for very strict shift checking then remove '=0'
    if (Number(shift) === NaN) {
    return Error('Invalid Shift Provided')
    } else {
        shift = Number(shift);
    }

    if(typeof(toEncipher) === 'string' || (typeof(toEncipher) === 'number' && toEncipher !== NaN)) {
        toEncipher = String(toEncipher);
    } else {
        return Error('Invalid string provided');
    }

    // These are the valid entries aacepted, you can change it according to requirements
    const validEntries = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    shift %= validEntries.length;

    let output = '';
    for (let char of toEncipher) {
        if (char === ' ') {
            output += ' ';
            continue;
    //------- If you donot want to accept invalid entries then uncomment below block
    /*
    ========================================================================================================
            } else if (validEntries.indexOf(char) === -1) {return Error ('invalid character' + char)}
    ========================================================================================================
    and comment out the below block
    */
   //=======================================================================================================
        } else if (validEntries.indexOf(char) === -1) {
            output += char;
            continue;
        }
   //=======================================================================================================
   output += (validEntries.indexOf(char) + shift <= validEntries.length) ? validEntries[validEntries.indexOf(char) + shift] : validEntries[(validEntries.indexOf(char) + shift) % validEntries.length];
    }
    return output;
}

module.exports = caesarCipher;