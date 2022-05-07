nose_x=0;
nose_y=0;


function preload() {
    head_phones=loadImage("https://i.postimg.cc/g2PX8Zyf/kissclipart-headphones-computer-icons-75f940bbe38ad136-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(400,400);
    camera = createCapture(VIDEO);
    camera.hide();
    canvas.center()

    pose_net=ml5.poseNet(camera,modelLoaded);
    pose_net.on('pose',gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded successfuly!")
} 

function gotPoses(result) {
    if (result.length>0) {
        console.log(result);
        nose_x=result[0].pose.nose.x-220
        nose_y=result[0].pose.nose.y-150
    }
}

function draw() {
    image(camera,0,0,400,400);
    image(head_phones,nose_x,nose_y,220,200);
}

function save_img() {
    save("headphone.png")
}