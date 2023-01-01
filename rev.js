let str = "hello"

let reverseString = (str)
console.log(reverseString);

var newString = "";
console.log(newString);

for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]; // or newString = newString + str[i];
}
console.log(newString); // "olleh"


