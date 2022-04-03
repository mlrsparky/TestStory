function ExecuteScript(strId)
{
  switch (strId)
  {
      case "688Ax3DAspO":
        Script1();
        break;
      case "5vKn3gIZwpW":
        Script2();
        break;
  }
}

function Script1()
{
  var allAudios = document.getElementsByTagName("audio");
for (var i = 0; i < allAudios.length; i++) {
   allAudios[i].playbackRate = 2.0;
}

}

function Script2()
{
  var allAudios = document.getElementsByTagName("audio");
for (var i = 0; i < allAudios.length; i++) {
   allAudios[i].playbackRate = 0.5;
}
}

