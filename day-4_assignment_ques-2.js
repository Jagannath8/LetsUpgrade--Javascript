
// Create a webpage containing two input fields and a button.
// A. Write something in the first input
// B. On click of the button, the content of input one should be copied in the second input



function copyInput()
{
    var text2 = document.getElementById("input2") ;
    var text1 = document.getElementById("input1");
    text2.value = text1.value;
}
