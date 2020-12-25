var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute ('src', 'images/firefox-icon.png');
    }
}
var btn = document.querySelector('#btn');
btn.onclick = function() {
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Hi and welcome " + person + " My Friend";
    }
    document.getElementById("para").innerText = txt;
  }




















