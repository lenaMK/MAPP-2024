
var bands, bandWidth, soundHistory, soundHistoryMax
var bandHeight

function setUpVStrips(spectrum) {
    bands = 16
    bandWidth = windowWidth / bands
    console.log(bandWidth)


    bandHeight = 3
    soundHistoryMax = windowHeight/bandHeight

    soundHistory = []
}

function drawVStrips(spectrum) {
    background(0o0); 

    soundHistory.push(spectrum)

    if (keyIsDown(DOWN_ARROW) === true) {
            angle += 180
            translate(windowWidth, windowHeight)
            rotate(angle)
            console.log("rotate")
        
    }
    if (keyIsDown(RIGHT_ARROW) === true) {
        angle += 45
        rotate(angle)
        console.log("rotate")
    
    }
    if (keyIsDown(LEFT_ARROW) === true) {
        angle -= 70
        translate(0, windowHeight)
        rotate(angle)
        console.log("rotate")
    
    }

    if (keyIsDown(BACKSPACE) === true){
        //clear history
        soundHistory = []
    }



    if (soundHistory.length > soundHistoryMax){
        soundHistory.splice(0,1)
    }
    for (var i = 0; i < bands ; i++){
        var rectX = i*bandWidth

        for (var j = 0; j < soundHistory.length; j++){
            var rectY = j*bandHeight
        
            
            
            var fillColor = map(soundHistory[j][i],0, 255, 0, 360)
            stroke(fillColor, 200, 100)
            fill(fillColor, 200, 100)
            rect(rectX, rectY, bandWidth, bandHeight)


        }
        
    }
    
}