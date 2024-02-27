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

//getIMC(75, 176)


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

//reverseWords("Hoje é Domingo");

//Ex3

function countVowels(str) {
    var count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
            count++;
    }
    return count;
}

/*
var sentence = "Hello World"
var count = countVowels(sentence);
console.log("A frase" + sentence + "tem" + count + "vogais!");
*/

//Ex4

function countLetters(str, letter) {
    var count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] == letter)
            count++;
    }
    return count;
}

/*
var letter = "l"
var sentence2 = "Hello World "
var count = countLetters(sentence2, letter)
console.log("A frase " + sentence2 + " contém " + count + " vezes a letra " + letter)
*/

//Ex5

function countWorkTime(he, me, se, hs, ms, ss) {
    var totalSecEnt = he * 3600 + me * 60 + se;
    var totalSecSaida = hs * 3600 + ms * 60 + ss;

    var diff = totalSecSaida - totalSecEnt;

    var horas_remainer = diff % 3600;
    var horas = (diff - horas_remainer) / 3600;

    var s = horas_remainer % 60;

    var m = (horas_remainer - s) / 60;

    console.log("Trabalhou: " + horas + " hora: " + m + " minutos: " + s + " segundos")

}

countWorkTime(8, 0, 0, 9, 30, 20)


//console.log("Você trabalhou " + count + " horas") 

//Ex6

function drawRectangle(width, height) {
    var line = "";
    for (let i = 0; i < width; i++)
        line += "*";


    for (let j = 0; j < height; j++)
        console.log(line);

}

//drawRectangle(10,5)


//Ex7

function drawTriangle(height) {
    var line = "";
    for (let i = 0; i < height; i++) {
        line += "*";
        console.log(line);
    }
}

//drawTriangle(5)


//Ex8

function drawBox(width, height) {
    for (let i = 0; i < height; i++) {
        var line = "";
        for (let j = 0; j < width; j++) {
            if (i == 0 || i == height - 1 || j == 0 || j == width - 1)
                line += "*";

            else
                line += " "
        }
        console.log(line);
    }
}

//drawBox(10, 5)

//Ex9

let student1 = { name: "Luis", nAluno: 12345, grade: 10 };
let student2 = { name: "Joao", nAluno: 22345, grade: 5 };
let student3 = { name: "Jorge", nAluno: 32345, grade: 9 };
let student4 = { name: "Carlos", nAluno: 42345, grade: 18 };
let student5 = { name: "Tiago", nAluno: 52345, grade: 20 };
var students = [];
students.push(student1, student2, student3, student4, student5);

function listStudents(students) {
    for (let i = 0; i < students.length; i++) {
        console.log("O aluno " + students[i].name + ", número " + students[i].nAluno + ", tem média de: " + students[i].grade)
    }
}

listStudents(students);

function getBestGrade(students) {
    var bestStudent = students[0];
    for (var i = 1; i < students.length; i++) {
        if (students[i].grade > bestStudent.grade)
            max = students[i];
    }
    return bestStudent;
}

bestStudent = getBestGrade(students)
console.log("A melhor nota foi: " + bestStudent);

function getWorstGrade(students) {
    var min = students[0].grade;
    for (var i = 1; i < students.length; i++) {
        if (students[i].grade < min)
            min = students[i].grade;
    }
    return min;
}

var worstGrade = getWorstGrade(students);
console.log("A pior nota foi: " + worstGrade);


function getAverage(students) {
    var soma = 0;
    for (var i = 0; i < students.length; i++) {
        soma += students[i].grade;
    }
    average = soma / students.length;
    return average;
}

function closerToAverage(students) {
    var avg = getAverage(students);
    var minDiff = Number.POSITIVE_INFINITY;
    var closest_student = students[0];
    for (let i = 1; i < students.length; i++) {
        var diff = Math.abs(avg - students[i].grade);
        if (diff < minDiff) {
            minDiff = diff;
            closest_student = students[i];
        }
    }
    return closest_student;
}


var averageStudent = closerToAverage(students);
var average = getAverage(students);
console.log("A média foi: " + average + " e o aluno foi: " + averageStudent.nAluno);


function getNegativeGrades(students) {
    var count = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade < 10)
        count++;
    }
    return count;
}

var negativas = getNegativeGrades(students);
console.log("Houveram " + negativas + " negativas.")

function getPositiveGrades(students) {
    var count = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 10)
            count++;
    }
    return count;
}

var positivas = getPositiveGrades(students);
console.log("Houveram " + positivas + " positivas.")