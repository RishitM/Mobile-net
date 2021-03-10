var answer = "";
console.log("ml5 version = ",ml5.version);
Webcam.set(
    width=300,
    height=300,
    image_format="png",
    png_quality=90
)
Webcam.attach("#camera");

function takePic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src="+data_uri+" id='pic'>";
        
    });
}
classifier=ml5.imageClassifier("MobileNet",Modeloaded);
function Modeloaded(){
    console.log("The Model is Loaded");
}
function identifyPic(){
capturedImage=document.getElementById("pic");
classifier.classify(capturedImage, gotResult);
     
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data1="I think the item you are showing is "+ answer;
    var utterThis= new SpeechSynthesisUtterance(speak_data1) ;
    utterThis.rate=0.7;
    synth.speak(utterThis);
}
function gotResult(error,result){
    if(error){
        console.error("3rr0r");
    }
    else{
        console.log(result);
        answer= result[0].label;
        console.log(answer);
        document.getElementById("answer").innerHTML= "<img src='blub.gif' id='pic2'>" + answer;
        speak();
    }
}
