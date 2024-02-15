/*
console.log("Hello World");

//Ex5
//IMPLEMENTAÇÃO
function calculadora(notateorica, notapratica) {
     var media = (notateorica * 0.4) + (notapratica * 0.6)
     console.log("A tua média é:" + media)

     if (media < 9.5)
          console.log("Reprovado!")
     else
          console.log("Aprovado!")


}

//INVOCAÇÃO
calculadora(12, 10)
calculadora(9, 9)

//Ex6





function calculator(op1, op2, operator) {
     if (operator == "+")
          return op1 + op2;
     else if (operator == "*")
          return op1 * op2;
     else if (operator == "-")
          return op1 - op2;
     else if (operator == "/")
          return op1 / op2;
     else if (operator == "^")
          return op1 ** op2;
     else
          console.log("Operador errado!")
}

var res = calculator(4, 4, "^");
console.log(res);


function multipleOf(value, limit) {
     for (var i = value; i < limit; i += value)
          console.log(i)
}

multipleOf(3, 60)


function addto(num) {
     for (var i = 1; i <= num; i++) {
          soma += i;
     }
     return soma;
}


console.log(addto(10));


function fact(n) {
     var f = 1;
     for (var i = n; i > 1; i--) {
          f *= i;
     }
     return f;
}

console.log("Factorial de:" + n + "é:" + fact(4))

*/

//Ex11

array = [2, 8, 10, 7, 2]

function getMax(array) {
     var max = array[0];
     for (var i = 1; i < array.length; i++) {
          if (array[i] > max)
               max = array[i];
     }
     return max;
}

function getMin(array) {
     var min = array[0];
     for (var i = 1; i < array.length; i++) {
          if (array[i] < min)
               min = array[i];
     }
     return min;
}

function getAverage(array) {
     var soma = 0;
     for (var i = 0; i < array.length; i++) {
          soma += array[i];
          average = soma / array.length;
     }
     return average;
}

var array = [2, 8, 10, 7, 2]
console.log(getMax(array))
console.log(getMin(array))
console.log(getAverage(array))