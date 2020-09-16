
window.onload=function()
{
    let initialbus = [];
    if(localStorage.getItem("buses")==null)
    {
        localStorage.setItem("buses", JSON.stringify(initialbus));
    }

}


function display(bus_data = undefined)
{
    let resbuses = "";
    let buses;
    if (bus_data == undefined)
    {
        buses = JSON.parse (localStorage.getItem("buses"));
    }
    else
    {
        buses = bus_data;
    }

    
    buses.forEach(function (bus, index)
    {
        let currentrow = `<tr>
        <td>${index + 1}</td> 
        <td>${bus.name}</td> 
        <td>${bus.source}</td> 
        <td>${bus.destination}</td> 
        <td>${bus.bus_number}</td>
        <td>${bus.passenger_capacity}</td>
        <td><button onclick="deleteBus(${index})">Delete</button>
        <button onclick="showModal(${index})">Update</button>
        </td>
        </tr>`;

        resbuses += currentrow;
     
    });

    // document.getElementsByClassName('tdata')[0].innerHTML = tabledata;
    document.getElementById('tdata').innerHTML = resbuses;
}

display();


function addBus(event)
{
    event.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let bus_number = document.getElementById("number").value;
    let passenger_capacity = document.getElementById("capacity").value;

    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.bus_number = Number (bus_number);
    bus.passenger_capacity = Number (passenger_capacity);


    let buses = JSON.parse (localStorage.getItem("buses"));
    buses.push(bus);
    localStorage.setItem("buses", JSON.stringify(buses));
    

    // let stringsuperheroes = JSON.stringify(superheroes);
    // // console.log(superheroes);
    // // console.log(stringsuperheroes);
    // localStorage.setItem("superheroes", stringsuperheroes);


    display();

    document.getElementById("name").value="";
    document.getElementById("source").value="";
    document.getElementById("destination").value="";
    document.getElementById("number").value="";
    document.getElementById("capacity").value="";

}


function searchBySource()
{
    let searchValue = document.getElementById("searchSource").value;
    let buses = JSON.parse (localStorage.getItem("buses"));
    let newdata = buses.filter(function(bus)
    {
        return (bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
    });

    display(newdata);
}


function searchByDestination()
{
    let searchValue = document.getElementById("searchDestination").value;
    let buses = JSON.parse (localStorage.getItem("buses"));
    let newdata = buses.filter(function(bus)
    {
        return (bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1);
    });

    display(newdata);
}



function deleteBus(index)
{
    let buses = JSON.parse (localStorage.getItem("buses"));

    buses.splice(index,1);
    localStorage.setItem("buses", JSON.stringify(buses));
    display();
}


let updateIndex;


function copyBus(index)
{
    let buses = JSON.parse (localStorage.getItem("buses"));
    updateIndex = index;
    // console.log(updateIndex);

    let bus = buses[index];
    // console.log(superhero);

    document.getElementById("upname").value=  bus.name;
    document.getElementById("upsource").value = bus.source;
    document.getElementById("updestination").value = bus.destination;
    document.getElementById("number").value = bus.bus_number;
    document.getElementById("capacity").value = bus.passenger_capacity;

}


function updateBus(event)
{
    event.preventDefault();
    let buses = JSON.parse (localStorage.getItem("buses"));
    let bus = buses[updateIndex];
    // console.log(superhero);
    document.getElementById("upname").value=  bus.name;
    document.getElementById("upsource").value = bus.source;
    document.getElementById("updestination").value = bus.destination;
    document.getElementById("number").value = bus.bus_number;
    document.getElementById("capacity").value = bus.passenger_capacity;


    bus.name = name;
    bus.source = source;
    bus.destination = destination;
    bus.bus_number = Number (bus_number);
    bus.passenger_capacity = Number (passenger_capacity);

    // console.log(superhero);


    localStorage.setItem("buses", JSON.stringify(buses));
    display(superheroes);
    
    // code for hiding from anywhere

    let modal=document.getElementsByClassName("modal")[0];
        modal.style.display="none";

}


function showModal(index)
{
    let modal=document.getElementsByClassName("modal")[0];
    modal.style.display="block";
    // console.log(modal);

    copyBus(index);

}

function hideModal(event)
{
    if(event.target.className == "modalchild")
    {
        let modal=document.getElementsByClassName("modal")[0];
        modal.style.display="none";
    }
    
}


