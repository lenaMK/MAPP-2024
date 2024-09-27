

var stairHeight, space, minHeight, maxHeight

var minWidth, maxWidth, growSize, stairWidth

var creditStart, creditTime, textX, textY, time


function setupCredits() {
    
    maxWidth = windowWidth
    minWidth = 10

    minHeight = windowHeight/3 //from top to bottom
    maxHeight = windowHeight

    stairHeight = 20

    space = 25

    rectMode(CENTER)
    creditStart = frameCount
    textX = windowWidth/2
    textY = windowHeight/5*2
    time = 60

}

function drawCredits(spectrum){
    background('black')

    fill('white')
    nbStairs = 16
    growSize = (maxWidth-minWidth)/(nbStairs-2)
    stairWidth = minWidth
    
    

    for (var i = nbStairs; i > 0; i-- ){

        var rectX = windowWidth/2
        var rectY = maxHeight - (stairHeight+space-(i/2))*i
        var rectWidth = stairWidth
        var rectHeight = stairHeight-i

//  add if clause here if bw is better
        
        var colorFromSpectrum = map(spectrum[spectrum.length-i], 0, 255, 0, 360)
        stroke(colorFromSpectrum, 200, 0)
        fill(colorFromSpectrum, 200, 100)
        rect(rectX, rectY, rectWidth, rectHeight)
        stairWidth += growSize

    }
    var textColor = map(spectrum[0], 0, 255, 0, 360) 
    stroke(textColor, 200, 0)
    fill(textColor, 200, 100)
    textSize(50)
    creditTime = frameCount - creditStart

    

    if (creditTime < time){
        text("MAPP_MTL", textX, textY)
    } else if (creditTime < time*2){
        text("SHIFT RADIO", textX, textY)
    }
    else if (creditTime < time*3){
        text("DJ - Esther Côté", textX, textY)
    }
    else if (creditTime < time*4){
        text("VJ - Lena MK", textX, textY)
    }
    else if (creditTime < time*5){
        text("Lab scénographique", textX, textY)
    }
    else {
        creditStart = frameCount
    }

}