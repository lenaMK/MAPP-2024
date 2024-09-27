
var time
var speed = 8
function setupToBlack(){
    //frame count when to black is called
    time = frameCount 
    rectMode(CORNER)
}

function drawToBlack(){
    // numbe of frames called since start of toBlack
    var current = frameCount - time

    for (var i = 0; i < current ; i++){

        if (i < windowHeight/2){
            fill('black')
            stroke('black')
            rect(0, 0, windowWidth, i*speed)

            rect(0, windowHeight-i*speed, windowWidth, windowHeight)
        }
        /*
        else if (i < (windowHeight/3*2)){

        }
        */
    }
}