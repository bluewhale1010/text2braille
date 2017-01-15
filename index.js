'use strict';
const codes = require('./codes');

/**
 * Convert Text to Braille
 * @param {string} text
 * @return {string}
 */
function toBraille(text){
    var brailleText = '';
    for (var i = 0; i < text.length; i++) {
        brailleText += codes[text[i]]
    };
    return brailleText;
}

module.exports = toBraille;