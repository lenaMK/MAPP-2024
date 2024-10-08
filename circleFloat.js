var sound

var growSoundFactor = 112 //to adapt to sound level

var growSizeIncrease = 3
var growSizeDecrease = 2
var colorSizeInscrease = 0.5
var radius, minRadius, maxRadius, circleX, circleY, circleColorB, circleHue, circleSat
var noiseValue

var colorChange

function setupCircleFloat(){
    stroke('black')
    minRadius = windowHeight/8
    maxRadius = windowHeight/2
    radius = minRadius

    circleHue = 210
    circleSat = 100
    circleColorB = 80
    

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}




function drawCircleFloat(spectrum, alpha, speed){

    

    if (alpha == true)   
        background(0o0, 0.25)
    else
        background(0o0)

        // Calculate the coordinates.
    circleX = windowWidth * noise(speed * frameCount);
    circleY = windowHeight * noise(speed * frameCount + 10000);

    sound = spectrum[14]

    fill('white')


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
    }1

    colorChange = random(10, 320)

    if (keyIsDown(67) === true) {
        if (circleHue < (360- colorChange))
            circleHue += colorChange
        else{
            var diff = 360 - colorChange
            circleHue = colorChange - diff
        } 
            
        console.log("c", circleHue)
    }   

    fill(circleHue, circleSat, circleColorB)
    
    circle(circleX, circleY, radius)
    
    
}