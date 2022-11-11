var num1 = 10; // File Level Scope
let num2 = 18; // Block Level Scope

if(num1 > 5)
{
    var res = 0;
   res = num1+90;
   console.log('Using var '+res);
}


if(num1 > 5)
{
    let res = 0;
   res = num1+190;
   console.log('Using let '+res);
}


