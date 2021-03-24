function preload() {
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
var noseX = 0;
var noseY = 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustache, noseX, noseY, 60, 60);
}

function take_snapshot() {
    save('My_fiter_image.png');
}

function modelLoaded() {
    console.log('posenet is initialized');
}