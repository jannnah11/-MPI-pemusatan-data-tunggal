function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BIbp9Ez0aH":
        Script1();
        break;
      case "6PWDT8gnHJm":
        Script2();
        break;
  }
}

function Script1()
{
  var audio=document.getElementById('bgsong');
audio.src="sound 3.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio= document.getElementById('bgsong');
audio.src="sound 3.mp3";
audio.load();
audio.play();
audio.volume=0.3;


}

