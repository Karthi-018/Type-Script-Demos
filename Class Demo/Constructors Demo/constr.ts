class Student
{
    // sid:number
    // sname:string
    // marks:number
// Access Specifiers 
    // -> public 
    // -> private 
    constructor(public id:number,public name:string,public mark:number)  
    {
        //'this' keyword is used point to the current object 
       
    }
}

// syntax to create a objecty 

// var <objectName> = new <ClassName>();

var s1 = new Student(101,'yaazhini',90); 
console.log(s1.id +" "+s1.name+" "+s1.mark)
s1.id=101;
s1.mark=95;
s1.name='AAA'
console.log(s1.id +" "+s1.name+" "+s1.mark)
var s2 = new Student(102,'karthi',95);
console.log(s2.id +" "+s2.name+" "+s2.mark)
