function updateDateTime() {
  var dt = new Date();
  var date = dt.toLocaleDateString('en-GB'); // DD/MM/YYYY format
  var time = dt.toLocaleTimeString();         // Default time format
  document.getElementById("datetime").innerHTML = date + "  -|- " + time;
}
setInterval(updateDateTime, 1000);
updateDateTime();