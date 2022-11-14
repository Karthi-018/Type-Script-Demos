var StudentDetails = /** @class */ (function () {
    function StudentDetails(sid, sname, marks) {
        this.sid = sid;
        this.sname = sname;
        this.marks = marks;
    }
    // public get getsid()
    // {
    //     return this.sid;
    // }
    // public set setsid(sid:number)
    // {
    //     this.sid=sid;
    // }
    // public set setsname(sname:string)
    // {
    //     this.sname=sname;
    // }
    // public get getsname()
    // {
    //     return this.sname;
    // }
    // public set setmarks(marks:number)
    // {
    //     this.marks=marks;
    // }
    // public get getmarks()
    // {
    //     return this.marks;
    // }
    StudentDetails.prototype.displayStudentDetails = function () {
        console.log(this.sid + " " + this.sname + " " + this.marks);
    };
    return StudentDetails;
}());
var sd1 = new StudentDetails(101, 'Yaazhini', 85);
var sd2 = new StudentDetails(102, 'Karthi', 95);
var sd3 = new StudentDetails(103, 'Pavi', 80);
sd1.displayStudentDetails();
sd2.displayStudentDetails();
sd3.displayStudentDetails();
