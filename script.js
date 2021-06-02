document.getElementById('alert').addEventListener('click', reportResults)
/*
the computer reads what is in the text box and dispalys that as an alert when you press the button
*/

function reportResults () {
  alert(document.getElementById('text').value)
}
