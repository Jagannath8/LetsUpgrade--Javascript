
// Create an array of objects with objects having the following properties
// A. {name (string), age (number), country (string), hobbies array (string [ ] ) }
// B. Write a function to display all the objects on the console



let details = [
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











