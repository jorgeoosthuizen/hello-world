var array =[];


array.push(function() {
    console.log("Hello World ")
});

array.push(function() {
    console.log("1,2 ")
});
array.push(function() {
    console.log("3")
});

for(i=0;i<array.length;i++){
    console.log(array[i]());
}