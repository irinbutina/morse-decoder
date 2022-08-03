const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [] 
    for(let i=0; i < expr.length; i +=10) {
       let el = expr.slice(i, i+10); 
        arr.push(el)
    }
 
    let words = []
   
    arr.forEach(elem => {
        let str = ''
        if (elem === '**********') { 
            str = str + ' '
            words.push(str)
        } else { 
            for(let j=0; j < elem.length; j +=2) {
                let el = elem.slice(j, j+2); 
                 if (el === '00') {
                    str = str + ''
                 } 
                 if (el === '10') {
                    str = str + '.'
                 }
                 if (el === '11') {
                    str = str + '-'
                 }
             }
        words.push(MORSE_TABLE[str])
        }
    })
    return words.join('')
}

module.exports = {
    decode
}