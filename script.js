//Script to select & swap two boxes to solve puzzle developed by SARTHAK PATIDAR

var swap = [],move=0,inner = [];

inner[0] = 0;

for(i=1;i<10;i++)                          //to initialize swap array
{
  swap[i] = 0;
  inner[i] = document.getElementById('tile'+i).innerHTML;
}

var count=0;

function active(no)                      //function to differentiate b/w selected tiles and normal tiles
{

  if(count >=2)
  {
    if(swap[no] == 1)
    {
      swap[no] = 0;
      document.getElementById(+no).style.boxShadow = "inset 0 0 15px 2px #fff";
      document.getElementById('tile'+no).style.color = "#fff";
    }

    else
    {
      for(i=1;i<10;i++)
      {
        swap[i] =0;
        document.getElementById(+i).style.boxShadow = "inset 0 0 15px 2px #fff";
        document.getElementById('tile'+i).style.color = "#fff";
      }

      swap[no] = 1;
      document.getElementById(+no).style.boxShadow = "inset 0 0 15px 2px #666";
      document.getElementById('tile'+no).style.color = "#000";
    }

    count = 1;
  }

  else
  {
      if(swap[no] == 1)
      {
        swap[no] = 0;
        document.getElementById(+no).style.boxShadow = "inset 0 0 15px 2px #fff";
        document.getElementById('tile'+no).style.color = "#fff";
        count--;
      }

      else
      {
        swap[no] = 1;
        count++;
        document.getElementById(+no).style.boxShadow = "inset 0 0 15px 2px #666";
        document.getElementById('tile'+no).style.color = "#000";
      }

  }
}

//function to provide hint
function hint()
{
  document.getElementById('puzzle').style.display = "none";
  document.getElementById('instruc').style.display = "flex";
  document.getElementById('title').innerHTML = "HINT";
}

function hide()
{
  document.getElementById('puzzle').style.display = "flex";
  document.getElementById('instruc').style.display = "none";
  document.getElementById('title').innerHTML = "PUZZLE";
}

document.getElementById('swap').onclick = function ()          //function to swap two tiles
{
  var swapA = 0, swapB = 0;

  for(i=1;i<10;i++)
  {
    if(swap[i] == 1)
    {
      if(!swapA)
        swapA = i;
      else
        swapB = i;
    }
  }

  if(!swapB)
  {
    alert('Please Select two boxes.');
  }

  else
  {
    var temp = document.getElementById(+swapA).innerHTML;
    document.getElementById(+swapA).innerHTML = document.getElementById(+swapB).innerHTML;
    document.getElementById(+swapB).innerHTML = temp;

    var tempColor = document.getElementById(+swapA).style.background;
    document.getElementById(+swapA).style.background = document.getElementById(+swapB).style.background;
    document.getElementById(+swapB).style.background = tempColor;

    var html = inner[swapA];
    inner[swapA] = inner[swapB];
    inner[swapB] = html;

    for(i=1;i<10;i++)
    {
      swap[i] = 0;
      document.getElementById(+i).style.boxShadow = "inset 0 0 15px 2px #fff";
      document.getElementById('tile'+i).style.color = "#fff";
    }

    move++;
    document.getElementById('move').innerHTML = "Moves: " +move;

    var cnt = 0;
    for(x=1;x<10;x++)
    {
      if(inner[x] == x)
      {
        console.log("Entered: "+x);
        cnt++;
        console.log("Count: "+cnt);
      }
    }

    if(cnt == 9)
    {
      document.getElementById('final').style.display = "block";
      document.getElementById('puzzle').style.display = "none";
    }
  }
        document.getElementById('msg').innerHTML = "Congratulations!!! You have solved this puzzle in "+move+" moves.";
}

function result()
{
  document.getElementById('final').style.display = "none";
  document.getElementById('puzzle').style.display = "flex";
}

function restart()
{
  location.href = self.location['href'];
  document.getElementById('final').style.display = "none";
}
