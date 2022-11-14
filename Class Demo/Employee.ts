// Class is a template/blue print of the object 

// class is a collection attributes(varabiles) and method(functions)

// --------Class Syntax-----------

// class <ClassName>
// {
//     <attributeName>:<datatype>
//     <attributeName>:<datatype>
//     <attributeName>:<datatype>
//     ....
//     constructor()
//     {
//         constructor body
//     }
//     <functionName>():[<ReturnType>]
//     {
//         function body
//     }
//     <functionName>():[<ReturnType>]
//     {
//         function body
//     }
//     <functionName>():[<ReturnType>]
//     {
//         function body
//     }
// }


class Employee
{
    eid:number =10
    ename:string='Yaazhini'
    salary:number=25000
}


var e1 = new Employee(); // e1 is Object here  
                            // 110 which can store 3 values where 2 of type number and 1 of type string 
e1.eid=105;
e1.ename='Karthi'
e1.salary=18000
console.log(e1)
var e2 = new Employee(); //121 which can store 3 values where 2 of type number and 1 of type string 
// e2.eid=106;
// e2.ename='Pavi'
// e2.salary=15000
console.log(e2)

// var n : number = 10; // 101 which can store only one value of type number 
// var s : string ='rrr' // 105 which can store only one value of type string  


