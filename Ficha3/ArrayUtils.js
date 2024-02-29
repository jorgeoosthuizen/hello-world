module.exports = {

    isEmpty: function (array) {
        return array.length == 0;
    },
    max: function (array) {
        var max = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] > max)
                max = array[i];
        }
        return max;
    },
    min: function (array) {
        var min = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] < min)
                min = array[i];
        }
        return min;
    },
    average: function (array) {
        var soma = 0;
        for (var i = 0; i < array.length; i++) {
            soma += array[i];
            average = soma / array.length;
        }
        return average;
    },
    indexOf: function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if (value == array[i])
                return i;
        }
        return -1;
    },
    subArray: function (array, startIndex, endIndex) {
        var subArray = [];
        for (let i = startIndex; i <= endIndex; i++) {
            subArray.push(array[i]);
        }
        return subArray;
    },
    isSameLength: function (a1, a2) {
        return a1.length == a2.length;
    },
    reverse: function (array) {
        var reverseArray = [];
        for (let i = array.length - 1; i >= 0; i--) {
            reverseArray.push(array[i]);
        }
        return reverseArray;
    },
    swap: function (array, index1, index2) {
        var temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    },
    contains: function (array, value) {
       return this.indexOf(array, value)!= -1;
    },
    concatenate: function (a1, a2) {
        var concatArray=[];
        for (let i = 0; i < a1.length; i++) {
            concatArray.push(a1[i]);
        }
        for (let i = 0; i < a2.length; i++) {
            concatArray.push(a2[i]);
    }
    return concatArray;
}
}






