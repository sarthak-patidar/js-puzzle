//routine to generate a random arrangement of boxes || developed by SARTHAK PATIDAR

while(!document.getElementById("9").style.background)
{
  var a;
  var red=0,blue=0,green=0;

  for(a=1;a<10;a++)
  {
    var color = Math.floor(Math.random()*300);


    if(color <100  && red<=2)
    {
      document.getElementById(+a).style.background = "red";
      document.getElementById('tile'+a).innerHTML = 1 + 3*Math.abs(red-2);
      red++;
    }

    else if (red ==3 && color <100) {
      a--;
    }


    if(color >=100 && color <200 && blue<=2)
    {
      document.getElementById(+a).style.background = "blue";
      document.getElementById('tile'+a).innerHTML = 2 + 3*Math.abs(blue);
      blue++;
    }

    else if (blue ==3 && color >=100 && color<200) {
      a--;
    }


    if(color >=200 && green<=2)
    {
      document.getElementById(+a).style.background = "#0f0";
      document.getElementById('tile'+a).innerHTML = 3+ 3*Math.abs(2-green);
      green++;
    }

    else if (green ==3 && color >=200) {
      a--;
    }
//    console.log("Div index: "+a+" rand no : "+color+" Count (r,g,b) "+red+" "+green+" "+blue);
  }
}
