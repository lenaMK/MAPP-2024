
var time
var closeSpeed
function setupToBlack(){
    //frame count when to black is called
    time = frameCount 
    rectMode(CORNER)
    closeSpeed = 8
}

function drawToBlack(){
    // number1 of frames called since start of toBlack
    var current = frameCount - time

    for (var i = 0; i < current ; i++){

        if (i < windowHeight/2){
            fill('black')
            stroke('black')
            rect(0, 0, windowWidth, i*closeSpeed)

            rect(0, windowHeight-i*closeSpeed, windowWidth, windowHeight)
        }
    }
}