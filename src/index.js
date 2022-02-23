const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let digitalArr = [];
  let morseArr = [];
  let result = "";

  for (let i = 0; i < expr.length; i += 10) {
    digitalArr.push(expr.slice(i, i + 10));
  }
  for (let element of digitalArr) {
    let letterArr = [];
    if (element === "**********") {
      letterArr.push(" ");
    } else {
      for (let i = 0; i < element.length; i += 2) {
        let el = element.slice(i, i + 2);
        if (el === "10") {
          letterArr.push(".");
        } else if (el === "11") {
          letterArr.push("-");
        }
      }
    }
    morseArr.push(letterArr.join(""));
  }
  return (result = morseArr
    .map((el) => (el === " " ? " " : MORSE_TABLE[el]))
    .join(""));
}

module.exports = {
  decode,
};
