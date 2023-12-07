leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function draw()
{
    background("#FFFFFF");
    textSize(difference);
    fill('#F90093');
    text('Hello', 90, 150);

}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX);
        difference = floor(leftWristX - rightWristX);
    }
}