var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 function start(){

document.getElementById("textbox").innerHTML="";
recognition.start();


 }
recognition.onresult=function (lok){
console.log(lok); 
var mm=lok.results[0][0].transcript;
document.getElementById("textbox").innerHTML=mm;

speak();


}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
}


camera=document.getElementById("camera");
Webcam.set({
width:500,
height:300,
image_format:"png",
png_quality:80

})




