var isNotClicked = true;

var loveCalculator = function(){
    var yourName = document.getElementById("firstname").value;
    var loversName = document.getElementById("lovername").value;
    var loveScore = Math.random() * 100;
    var loveFinal = Math.round(loveScore);
    if (yourName === "") {
        alert("please enter your name");
      } else if (loversName === "") {
        alert("Please enter your lovers name");
    
      } else if (isNotClicked) {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
        isNotclicked=false;
      }
      else {
        document.getElementById("lovefinal").innerHTML = yourName + " and " + loversName + " your lovescore is " + loveFinal + " % ";
      }
};
function resetFunction() {
    location.reload();
    var getValue= document.getElementById("firstname");
    var getValue1= document.getElementById("lovername");
    if (getValue.value !="") {
        getValue.value = "";
    }
    if (getValue1.value !=""){
        getValue1.value = "";
    } 
  }

//   Send the mail Function

function sendMail() {
        Email.send({
        Host : "smtp.gmail.com",
        Username : "pankajkamal8960@gmail.com",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
        }).then(
      message => alert(message)
    );
}