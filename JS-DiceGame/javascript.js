// ran no generation for dice 1 changings
var ran=Math.floor(Math.random() * 6) + 1;
var img= "di" + ran + ".jpg"; //link creation
var imgsrc="images/" +img;    //folder combination
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imgsrc);

// ran no generation for dice 2
var ran2=Math.floor(Math.random()*6)+1;
var img2="images/di"+ran2+".jpg";
document.querySelectorAll("img")[1].setAttribute("src",img2);

if (ran > ran2)
  {
    document.querySelector("h3").innerHTML="You win !!!";

   }
else if(ran === ran2)
{
    document.querySelector("h3").innerHTML="draw try again!!!";

}
else
{
    document.querySelector("h3").innerHTML="Lost again!!!";

   }
