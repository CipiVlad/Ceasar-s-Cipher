//Alphabet --> USE THIS FOR SECRET MESSAGE
let oderedAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

//Alphabet Z = A --> READ HERE, WHAT YOU WANT TO HIDE
let alphaZA = ['Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y']


//Cipher Generator
function cipherEncode(secret) {

    //Message
    let message = []

    //outer loop => How long is secret?
    for (let i = 0; i < secret.length; i++) {

        //inner loop => How long is oderedAlphabet alphabet?
        for (let j = 0; j < oderedAlphabet.length; j++) {

            // if number of i matches exact j, than push 
            if (secret[i] === oderedAlphabet[j]) {
                message.push(alphaZA[j])

            }

        }

    }
    // add all elements of decoded message into a string and return it
    return message.join("")
}

//call genFunction with secret message
console.log(
    cipherEncode('DJQJ')
);

/**
 * run node cipher.js
 */