export class Employee
{
    constructor(private eid:number,private ename:string,private salary:number)
    {

    }

    public displayEmployeeDetails()
    {
        console.log(this.eid+" "+this.ename+" "+this.salary);
    }
}

// var e1 = new Employee(201,'Karthi',25000);
// e1.displayEmployeeDetails();

export function displayMsg()
{
    console.log("Welcome to Modules Demo")
}