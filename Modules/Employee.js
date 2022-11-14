"use strict";
exports.__esModule = true;
exports.displayMsg = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(eid, ename, salary) {
        this.eid = eid;
        this.ename = ename;
        this.salary = salary;
    }
    Employee.prototype.displayEmployeeDetails = function () {
        console.log(this.eid + " " + this.ename + " " + this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;
// var e1 = new Employee(201,'Karthi',25000);
// e1.displayEmployeeDetails();
function displayMsg() {
    console.log("Welcome to Modules Demo");
}
exports.displayMsg = displayMsg;
