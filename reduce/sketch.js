/*
    title: room
    author: LenaMK & lab scénographique MAPP 2024
    date: 2024-09-16
    description:

*/

var mic, fft, spectrum
var radius, fillColor, speed
var minSize = 50
var smaller

function setup() { 
    colorMode(HSB, 360, 100, 100, 250);
    createCanvas(windowWidth, windowHeight); 
    angleMode(DEGREES)
   
    //set mic source
    mic = new p5.AudioIn()
    mic.start()
    playing = true
    
    radius = windowWidth
    smaller = true
} 


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function draw() {   
    speed = frameCount / 100
    background(0o0); 

    //get spectrum from fft analysis
    //spectrum = fft.analyze()
    sound = mic.getLevel(0.5)
    
    fillColor = map(sound*1000, 0,1, 0, 360, true)

    fill(fillColor, 100, 100)

    text(String(mic.getLevel()*100), windowWidth-250, windowHeight-80)
    text(String(fillColor), windowWidth-250, windowHeight-50)



    if (fillColor == 360){
        radius = windowHeight
        frameCount = 0
    }
    else if (radius > minSize) //become smaller
        radius = radius - speed


    /* go bigger, smaller, ...
    if (radius > minSize && smaller == true) //become smaller
        radius = radius - speed
    else if (radius <= minSize)
        smaller = false

    if (radius < windowWidth & smaller == false)
        radius = radius + speed
    else if (radius >= windowWidth)
        smaller = true
   */
    circle(windowWidth/2, windowHeight/2, radius)

    
} 


