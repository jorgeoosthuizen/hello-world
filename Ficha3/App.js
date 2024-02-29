function started(){
    console.log("Started Download...");
}

function update(progress){
    console.log(progress + "% of Download");
}

function completed(){
    console.log("Download Completed!");
}


function performDownload(started,update,completed){
    started();
    for (let i = 0; i <= 100; i++) {
        update(i);
    }
    completed();
}

performDownload(started,update,completed);


var arrayUtils = require('./ArrayUtils');

var a1 = [3,4];
var a2 =[2,1,6,77,9,6];
var v = 2;

var e1 = arrayUtils.isEmpty(a1);
var e2 = arrayUtils.isEmpty(a2);
console.log("Array: " + a1 + " is empty? " + e1);
console.log("Array: " + a2 + " is empty? " + e2);


var index = arrayUtils.indexOf(a2,v);
console.log(index)

var sub = arrayUtils.subArray(a2,1,2)
console.log(sub)

var len = arrayUtils.isSameLength(a1,a2);
console.log(len);

var reverse = arrayUtils.reverse(a2);
console.log(reverse);

var swap = arrayUtils.swap(a2,0,1);
console.log(swap);

var contains = arrayUtils.contains(a2,2);
console.log(contains);

var concat = arrayUtils.concatenate(a1,a2);
console.log(concat);