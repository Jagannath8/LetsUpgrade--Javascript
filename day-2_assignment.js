
// Question 1 
// Program to search for a particular character in a string 

let string = "Javascript";
let index = string.indexOf("r");
console.log(index);




// Question 2 
// Program to convert minutes to seconds 

function time_convert(num)
{ 
  var minutes = Math.floor(num / 60);  
  var seconds = num % 60;
  return `${minutes} mins ${seconds} sec`;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));




// Question 3 
// Program to search for a element in a array of strings 

let programming_languages = ["C", "C++", "Java", "Javascript", "Python", "PHP"];
console.log(programming_languages[4]);





// Question 4 
// Program to display only elements containing 'a' in them from a array 

let contries = ["India", "Nepal", "Turkey", "England", "Sweden"];
var x;
for(let p = 0; p < contries.length; p++)
{
  x = contries[p].search("a");
  if (x>0)
  {
    console.log(contries[p]);
  }
}





// Question 5 
// Print an array in reverse order 

var arr = [1,2,3,4,5];
var size = arr.length;
for(var i = size-1; i >= 0; i--) 
{
  console.log(`${arr[i]}`);
}


