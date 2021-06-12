<button onclick="myFunction()">Start Simulation</button>
<p id="demo"></p>

<script >
function myFunction() {
  var txt;
  var person = prompt("Please enter your name:");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! Are you prepared to experience the myth, the legend, the year 2020!!!";
  }
  document.getElementById("demo").innerHTML = txt;
}
</script>