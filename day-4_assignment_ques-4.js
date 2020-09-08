
// Following the 3rd question
// A. Write a function to display all the objects having age less than 30
// B. Write a function to display all the objects having country India



let details=[
    {name:"Jagannath"},
    {age:20},
    {country:"India"},
    {hobbies:["playing","listening music","travelling"]},

    {name:"Jackie"},
    {age:25},
    {country:"Japan"},
    {hobbies:["hacking","fishing","bowling"]},

    {name:"David"},
    {age:20},
    {country:"America"},
    {hobbies:["hacking","webdev","cybersec"]},

    {name:"Ruhi"},
    {age:35},
    {country:"Englang"},
    {hobbies:["dancing","webdev","drawing"]},

    {name:"Salit"},
    {age:40},
    {country:"India"},
    {hobbies:["travelling","photography","cybersec"]},
]

details.forEach(function(details)
{
    console.log(details);
});

 


console.log("Person with age < 30");

for(let i=0; i<details.length; i++)
{
    if (details[i].age < 30)
    {
    console.log(details[i]);
    }
}

console.log("Person who live in India ");

for(let i=0; i<details.length; i++)
{
    if (details[i].country == "India")
    {
    console.log(details[i]);
    }
}



