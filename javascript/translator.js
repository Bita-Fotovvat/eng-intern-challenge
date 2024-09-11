const brailMap = {
    "a":"o.....", "b":"o.o...", "c":"oo....", "d":"oo.o..", "e":"o..o..", "f":"ooo...", "g":"oooo..", "h":"o.oo..",
    "i":".oo...", "j":".ooo..", "k":"o...o.", "l":"o.o.o.", "m":"oo..o.", "n":"oo.oo.", "o":"o..oo.", "p":"ooo.o.", 
    "q":"ooooo.", "r":"o.ooo.", "s":".oo.o.", "t":".oooo.", "u":"o...oo", "v":"o.o.oo", "w":".ooo.o", "x":"oo..oo", 
    "y":"oo.ooo", "z":"o..ooo", "cap":".....o", "num":".o.ooo", "decimal":".o...o", "1":"o.....",
    "2":"o.o...", "3":"oo....", "4":"oo.o..", "5":"o..o..", "6":"ooo...", "7":"oooo..", "8":"o.oo..", "9":".oo...",
    "0":".ooo..", ".":"..oo.o", ",":"..o...", "?":"..o.oo", "!":"..ooo.", ":":"..oo..", ";":"..o.o.", "-":"....oo",
    "/":".o..o.", "<":".oo..o", ">":"o..oo.", "(":"o.o..o", ")":".o.oo.", " ":"......"
}
const reverseBrailleMap = {};
for (const [key, value] of Object.entries(brailleMap)) {
    reverseBrailleMap[value] = key;
}
function isBraille(input) {
    return /^[oO\.]+$/.test(input);
}