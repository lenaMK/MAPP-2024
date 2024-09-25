var barWidth



function setupWalls(){
    angle = atan(windowWidth / windowHeight)

    barWidth = 40
    diff = 25

}


function drawWalls(){


    fill('white')
    var nbStripes = (windowWidth/2) / (barWidth*2)
    for (var i = 1; i <= nbStripes; i ++){
        console.log(i)
        var x1 = barWidth*i*2
        var y1 = (barWidth-diff)*i*2
    
        var height = windowHeight-(x1*2)
        
        push()
            translate(x1, y1)
            
            beginShape()
                vertex(0, 0)
                vertex(barWidth, barWidth)
                vertex(barWidth, height-barWidth)
                vertex(0, height)
            endShape()    
    
        pop()

    }
    
    

}