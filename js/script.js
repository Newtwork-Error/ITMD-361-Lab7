function init(){
//add your javascrip between these two lines of code
  function alertFunction(){
    alert('Isaac Kane: ' + inputForm.value);
  }

  function setText(){
    var outputText = document.getElementById('textoutput');
    outputText.innerHTML = "<h2>" + inputForm.value + "</h2>";
  }

  var alertDiv = document.getElementById('entrybutton');
  var inputForm = document.getElementById('entryinput');
  alertDiv.addEventListener('click', alertFunction);
  alertDiv.addEventListener('click', setText);
}
window.addEventListener('load', init);