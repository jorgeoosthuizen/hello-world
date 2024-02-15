//Ex1

function getIMC(weight, height) {
    var IMC = (weight / (height ** 2));
    if (IMC < 18.5)
        console.log("Abaixo do peso!");
    else if (18.5 < IMC < 25)
        console.log("Peso normal!");
    else if (25 < IMC < 30)
        console.log("Acima do peso!");
    else if (IMC > 30)
        console.log("Obeso!");
    else
        console.log("Valores inválidos!");

}

getIMC(75, 176)
getIMC(100, 176)
getIMC(80, 176)

//Ex2

function reverseWords(str) {
    var reversedStr = "";
    var words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        var word = words[i];
        for (let j = word.length - 1; j >= 0; j--) {
            reversedStr += word[j];
        }
        reversedStr += " ";
    }
    return reversedStr;
}

reverseWords("Hoje é Domingo");