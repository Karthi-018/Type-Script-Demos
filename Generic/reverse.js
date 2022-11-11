var data = ['1', '2', '3', '4', '5'];
var newArr = arrReverse(data);
console.log(newArr);
var data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var newArr1 = arrReverse(data1);
console.log(newArr1);
function arrReverse(arr) {
    var reverseArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}
var n = [1, 'a', true, 'b', 9];
var nout = arrReverse(n);
console.log(nout);
var n1 = [1, 2, 3, 4, 5];
var n2 = ['a', 'b', 'c'];
var n3 = [true, true, false, true, false];
