
// Create a webpage containing an image and three buttons
// A. On click of the second button a change the existing image to a new image
// B. On click of the third button change it once again
// C. On click of first, the first image should come back



function changeImage1()
{
    const ele = document.getElementById("image");
    const newUrl = "http://2.bp.blogspot.com/-7mWco9vz3WY/ToVmf0AKCII/AAAAAAAAAB4/E2lITaIQCAU/s1600/dog.jpg"

    ele.src = newUrl;

}




function changeImage2()
{
    const ele1 = document.getElementById("image");
    const newUrl1 = "https://i.ytimg.com/vi/_zVD5nR0aqY/hqdefault.jpg"

    ele1.src = newUrl1;

}




function changeImage()
{
    const ele2 = document.getElementById("image");
    const newUrl2 = "https://tse2.mm.bing.net/th?id=OIP.WQmwmN_69kQ6nP4yqw1UIgHaJ4&pid=Api&P=0&w=300&h=300"

    ele2.src = newUrl2;

}



