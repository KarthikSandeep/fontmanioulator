function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createImageBitmapCanvas(550,500);
    canvas.position(560,120);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#a503fc');
}
function modelLoaded(){
    console.log('PoseNet iS Intiliazed');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
