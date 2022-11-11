var data = ['1','2','3','4','5'];
var newArr = arrReverse(data);
console.log(newArr);
var data1 = [1,2,3,4,5,6,7,8,9];
var newArr1 = arrReverse(data1);
console.log(newArr1);

function arrReverse<T>(arr:T[])
{
    var reverseArr = [];
    for(var i=arr.length-1;i>=0;i--)
    {
        reverseArr.push(arr[i]);

    }
    return reverseArr;
}


var n:any[] = [1,'a',true,'b',9];
var nout=arrReverse(n);
console.log(nout);
var n1:number[]=[1,2,3,4,5];
var n2:string[]=['a','b','c'];
var n3:boolean[]=[true,true,false,true,false];


