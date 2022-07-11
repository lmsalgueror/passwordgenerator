const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]

let passOneEl = document.getElementById("passwordOne")
let passTwoeEl = document.getElementById("passwordTwo")

let isSymbol = false
let isAlive = true
let passwordArrayOne = "";
let passwordArrayTwo = "";
let isNumber = false
let passwordSymbLett = " "
let passwordNumLett = " "
let passwordGenerated = false
let canContinue = true



function passGen() {
    if (isAlive) {
        isNumber = document.getElementById("number-el").checked;
        let passLength = document.getElementById("length-el").value;
        isSymbol = document.getElementById("symbol-el").checked;

        if (passLength >= 30 || passLength < 7) {
            alert("Choose a length between 7 and 30")
            canContinue = false
            passwordGenerated = false
        }
        if (canContinue) {
            if (isNumber && isSymbol) {
                for (let i = 0; i < passLength; i++) {
                    let randomChar = Math.floor(Math.random() * characters.length)
                    let randomCharTwo = Math.floor(Math.random() * characters.length)
                    passwordArrayOne += characters[randomChar].toString()
                    passwordArrayTwo += characters[randomCharTwo].toString()
                }
            } else if (isNumber && !isSymbol) {
                passwordNumLett = letters.concat(numbers)
                for (let i = 0; i < passLength; i++) {
                    let randomCharNLOne = Math.floor(Math.random() * passwordNumLett.length)
                    let randomCharNLTwo = Math.floor(Math.random() * passwordNumLett.length)
                    passwordArrayOne += passwordNumLett[randomCharNLOne].toString()
                    passwordArrayTwo += passwordNumLett[randomCharNLTwo].toString()
                }
            } else if (!isNumber && isSymbol) {
                passwordSymbLett = letters.concat(symbols)
                for (let i = 0; i < passLength; i++) {
                    let randomCharSLOne = Math.floor(Math.random() * passwordSymbLett.length)
                    let randomCharSLTwo = Math.floor(Math.random() * passwordSymbLett.length)
                    passwordArrayOne += passwordSymbLett[randomCharSLOne].toString()
                    passwordArrayTwo += passwordSymbLett[randomCharSLTwo].toString()

                }
            } else if (!isNumber && !isSymbol) {
                for (let i = 0; i < passLength; i++) {
                    let randomCharL = Math.floor(Math.random() * letters.length)
                    let randomCharLTwo = Math.floor(Math.random() * letters.length)
                    passwordArrayOne += letters[randomCharL].toString()
                    passwordArrayTwo += letters[randomCharLTwo].toString()

                }
            }
            passwordGenerated = true

        }


        passOneEl.textContent = " " + passwordArrayOne
        passTwoeEl.textContent = " " + passwordArrayTwo
        isAlive = false

        console.log(isNumber)
        console.log(passLength)

    }

}

function reset() {
    isAlive = true
    passOneEl.textContent = " "
    passTwoeEl.textContent = " "
    passwordArrayOne = " "
    passwordArrayTwo = " "
    isSymbol = false
    isNumber = false
    passLength = 0
    passwordGenerated = false
    passOneEl.style.color = "black"
    passTwoeEl.style.color = "black"
    canContinue = true
}

function copyToClipboardOne() {
    if (passwordGenerated) {
        let copyText = passOneEl.textContent
        navigator.clipboard.writeText(copyText).then(() => {
            // Alert the user that the action took place.
            // Nobody likes hidden stuff being done under the hood!
            alert("Copied to clipboard");
        });
        passOneEl.style.color = "#EF798A"
        console.log(copyText)
    }

}

function copyToClipboardTwo() {
    if (passwordGenerated) {
        let copyText = passTwoeEl.textContent
        navigator.clipboard.writeText(copyText).then(() => {
            // Alert the user that the action took place.
            // Nobody likes hidden stuff being done under the hood!
            alert("Copied to clipboard");
        });

        console.log(copyText)
        passTwoeEl.style.color = "#EF798A"
    }
}

const today = new Date()
let textDate = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear()


console.log(textDate);

const child = document.getElementById("date-el");
child.innerHTML = "< p >" + textDate + "< /p>"