// function markatt()
// {
//     console.log('Mass Bunk');
// }

// function markatt1(sname:string)
// {
//     console.log('One Student present '+sname);
// }

// function markatt2(s1:string,s2:string)
// {
//     console.log("Two Student present "+ s1 +" "+s2)
// }

// markatt2('yaazhini','Karthi');


function markatt(...sname) // '...' -> is called as rest Argument
{
    if(sname.length==0)
    {
        console.log('Mass Bunk')
    }
    else
    {
        console.log("Total student present is "+sname.length )
        for(var i=0;i<sname.length;i++)
        {
            console.log(sname[i])

        }
        
    }
}


markatt('yaazhini','karthi','tharun');