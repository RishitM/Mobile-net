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
//classifier.classify(capturedImage,gotResult);
     
}
function gotResult(error,result){
    if(error){
        console.error("3rr0r");
    }
    else{
        console.log(result);
    }
}