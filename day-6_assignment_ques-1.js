

let employees = [
    {
        name:"Suresh",
        age:"35",
        city:"Chennai",
        salary:"33000"
    },

    {
        name:"Hritik",
        age:"41",
        city:"Bangalore",
        salary:"40000"
    },

    {
        name:"Radhika",
        age:"32",
        city:"Mumbai",
        salary:"35000"
    },

    {
    name:"Jason",
        age:"45",
        city:"Delhi",
        salary:"48000"
    },

    {
        name:"Naina",
            age:"29",
            city:"West Bengal",
            salary:"22000"
    }

];


function display(employeearray)
{
    let tabledata = "";

    employeearray.forEach(function (employee, index)
    {
        let currentrow = `<tr>
        <td>${index + 1}</td> 
        <td>${employee.name}</td> 
        <td>${employee.age}</td> 
        <td>${employee.city}</td> 
        <td>${employee.salary}</td>
        <td><button onclick="deleteEmployee(${index})">Delete</button>
        <button onclick="showModal(${index})">Update</button>
        </td>
        </tr>`;

        tabledata += currentrow;
     
    });

    // document.getElementsByClassName('tdata')[0].innerHTML = tabledata;
    document.getElementById('tdata').innerHTML = tabledata;
}

display(employees);



function addEmployee(event)
{
    event.preventDefault();
    let employee = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;

    employee.name = name;
    employee.age = Number (age);
    employee.city = city;
    employee.salary = Number (salary);

    // console.log(employee);

    employees.push(employee);
    // console.log(employees);


    display(employees);


    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("city").value="";
    document.getElementById("salary").value="";

}



function searchByName()
{
    let searchValue = document.getElementById("searchName").value;
    
    let newdata = employees.filter(function(employee)
    {
        return employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });

   
    display(newdata);
}



function searchByCity()
{
    let searchValue = document.getElementById("searchCity").value;
    
    let newdata1 = employees.filter(function(employee)
    {
        return employee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });

   
    display(newdata1);
}



function deleteEmployee(index)
{
    employees.splice(index,1);
    display(employees);
}

let updateIndex;



function copyEmployee(index)
{
    updateIndex = index;
    // console.log(updateIndex);

    let employee = employees[index];
    // console.log(employee);

    document.getElementById("upname").value=  employee.name;
    document.getElementById('upage').value = employee.age;
    document.getElementById('upcity').value = employee.city;
    document.getElementById('upsalary').value = employee.salary;

}



function updateEmployee(event)
{
    event.preventDefault();
    let employee = employees[updateIndex];
    // console.log(employee);
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let salary = document.getElementById("upsalary").value;

    employee.name = name;
    employee.age = Number (age);
    employee.city = city;
    employee.salary = Number (salary);

    // console.log(employee);


    display(employees);

    
    // code for hiding from anywhere

    let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";

}



function showModal(index)
{
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
    // console.log(modal);

    copyEmployee(index);

}



function hideModal(event)
{
    if(event.target.className == "modalchild")
    {
        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
    }
    
}




