interface Student
{
    sid:number
    sname:string
    marks?:number
}

function displayStudentDetails(s:Student)
{
    console.log('Student Details :')
    console.log('Student id :'+s.sid)
    console.log('Student Name :'+s.sname)
    console.log('Student Marks :'+s.marks)
}

var s1 = {sid:101,sname:'karthi'};
//displayStudentDetails(s1);
var s2 = {sid:102,sname:'Yaazhini'};
//displayStudentDetails(s2);
var s3 = {sid:103,sname:'Pavi'};
//displayStudentDetails(s3);