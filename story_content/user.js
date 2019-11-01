function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5V52tIcVPdD":
        Script1();
        break;
      case "6AJUPztBFnG":
        Script2();
        break;
      case "5shANgf7Dwl":
        Script3();
        break;
      case "673NKoal5fV":
        Script4();
        break;
      case "5n8fzMLAWvC":
        Script5();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script4()
{
  $("#tab-customlink").show();
}

function Script5()
{
  window.print();
}

