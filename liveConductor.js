/*
    title: conductor script
    author: LenaMK 
    date: 2024-09-21
    description:
        - conductor for the evening, organises different scripts for sound-based visualisations
        - MAPP 2024, lab scénographique, 28 septembre 2024
    docs and links:
        - using key codes: https://p5js.org/reference/p5/keyCode/
        - key codes: https://www.toptal.com/developers/keycode
        - quick HSB: https://www.learnui.design/blog/the-hsb-color-system-practicioners-primer.html

*/


var mic, fft, spectrum
var alpha
var scene
var bisouFontSize
var bisou, bisouFrame





function setup() {
    w = windowWidth
    h = windowHeight
    cnv = createCanvas(w, h);
    colorMode(HSB, 360, 100, 100, 250);
    angleMode(DEGREES)
    textAlign(CENTER);

    mic = new p5.AudioIn()
    mic.start()

    fft = new p5.FFT(0.8, 16)
    fft.setInput(mic)

    scene = null

    
    bisou = false
    
}


var alpha


function faitBisou(){
    background(0o0);
    fill('white')
    textSize(bisouFontSize)
    
    text("bisou", windowWidth/2, windowHeight/2)
    
}

function mousePressed(){
    console.log(spectrum)
    
}

function keyPressed() {

    if (key === '0') {
        setupToBlack()
        scene = 0
    }
    else if (key === '1'){     
        setupCircleFloat()
        scene = 1 
    }
    else if (key === '2'){     
        scene = 2 
    }
    else if (key === '3') {
        setupLines(spectrum);
        scene = 3 
    }
    else if (key === '4') {
        setUpVStrips(spectrum)
        
        scene = 4 
    }
    else if (key === '9') {
        setupCredits()
        
        scene = 9 
    }

    /*
    else if (key === '5') {
        scene = 5 
    }
    else if (key === '6') {
        scene = 6 
    }

*/
    if (key === 'b') {
        bisou = !bisou
        if (bisou == false){
            background(0o0);
            
        } else {
            bisouFontSize = 500
            bisouFrame = frameCount
        }
    }



    if (key === 'r') {
        background(0o0);
    }
    //combine with a black background key for flash effect 
    //when alpha is not false
    if (key === 'f') 
        background('white')

        
}



function draw() {

    spectrum = fft.analyze();
    
    
    


    if (scene == 0){
        drawToBlack()
        
    }else if (scene == 1){
        alpha = false
        drawCircleFloat(spectrum, alpha)
        
    } else if (scene == 2){
        alpha = true
        drawCircleFloat(spectrum, alpha)
    } else if (scene == 3){
        drawLines(spectrum);
    } else if (scene == 4){
        drawVStrips(spectrum)  
    } else if (scene == 9){
        drawCredits(spectrum)
    } 

    if (bisou == true){
        var time = frameCount-bisouFrame
        bisouFontSize -= time*3
        
        if (bisouFontSize < 5){
            bisou = false
            background(0o0);
        }else
         faitBisou()
    }
  
}




