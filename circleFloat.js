var sound

var growSoundFactor = 70 //to adapt to sound level

var growSizeIncrease = 3
var growSizeDecrease = 2
var colorSizeInscrease = 0.5
var grow


var radius, minRadius, maxRadius, circleX, circleY, circleColorB, circleHue, circleSat
var noiseValue

function setupCircleFloat(){
    minRadius = windowHeight/8
    maxRadius = windowHeight/2
    radius = minRadius
    grow = true
    circleHue = 210
    circleSat = 100
    circleColorB = 80
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function drawCircleFloat(spectrum){
    background(0o0, 0.25);

        // Calculate the coordinates.
    circleX = windowWidth * noise(0.005 * frameCount);
    circleY = windowHeight * noise(0.005 * frameCount + 10000);

    sound = spectrum[14]

    fill('white')

    text(String(sound), windowWidth-250, windowHeight-80)
    text(String(circleColorB), windowWidth-250, windowHeight-50)


    //size 
    if (radius > maxRadius){
        radius = minRadius
    }else if (radius < minRadius){
        radius = minRadius
    }

    // color
    
    if (sound > growSoundFactor){        
        circleColorB += colorSizeInscrease
        radius += growSizeIncrease
        circleSat += 0.05
        if (circleSat > 100)
            circleHue += 0.05
        if (circleSat > 360)
            circleSat = 0
        if (circleHue > 360)
            circleHue = 0

    } else {
        radius -= growSizeDecrease
    }

       

    fill(circleHue, circleSat, circleColorB)
    
    circle(circleX, circleY, radius)

}