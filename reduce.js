/*
    title: reduce script
    author: LenaMK
    date: 2024-09-16
    description:
        - to test gradients (For background): https://www.npmjs.com/package/p5.fillgradient

*/

var mic, fft, spectrum
var radius, fillColor, speed
var minSize = 50
var smaller

function setupReduce() { 
    
    playing = true
    
    radius = windowHeight
    smaller = true
} 


function drawReduce() {   
    speed = frameCount / 100
    background(0o0); 

    //get spectrum from fft analysis
    //spectrum = fft.analyze()
    sound = mic.getLevel(0.5)*50

    //need to adapt to expected min/max sounds
    fillColor = map(sound, 0,1, 0, 360, true)

    fill(fillColor, 80, 80)

    text(String(mic.getLevel()*100), windowWidth-250, windowHeight-80)
    text(String(fillColor), windowWidth-250, windowHeight-50)



    if (fillColor == 360){
        radius = windowHeight
        frameCount = 0 //can't use that 
    }
    else if (radius > minSize) //become smaller
        radius = radius - speed


   
    circle(windowWidth/2, windowHeight/2, radius)

    
} 


