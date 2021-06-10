status = "";
video = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
} 

function setup(){
    canvas = createCanvas(380,280);
    canvas.position(420,235);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw(){
image(video,0,0,380,280);
}

function modelLoaded(){
console.log("Model loaded !!");
status = true ;
video.loop();
video.speed(1);
video.volume(0);
}