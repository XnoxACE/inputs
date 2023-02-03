let red = "00";
let green = "00";
let blue = "00";

$(window).ready(
    function() {
        $("#colorBlock").css("background-color", "#" + red + green + blue);
    }
    );

function setRed() {

   let redNum = $("#red").val();
   red = toHexadecimal(redNum);

   

    if(red < 10){
        red = "0" + red;
    }

    if(red == 0){
        red = "00"
    }

 


   setColor();
   
   


}
function setGreen() {

    let greenNum = $("#green").val();
    green = toHexadecimal(greenNum);

    if(green < 10){
        green = "0" + green;
    }

    if(green == 0){
        green = "00"
    }

    

    setColor();

}
function setBlue() {

    let blueNum = $("#blue").val();
    blue = toHexadecimal(blueNum);

    if(blue < 10){
        blue = "0" + blue;
    }

    if(blue == 0){
        blue = "00"
    }

    
    setColor();

}


function setColor(){
    let color = "#" + red + green + blue;

    console.log(color);

    

    

    $("#colorBlock").css("background-color", color);
}


function toHexadecimal(number) {
    let result=[],i;
    for (i=number;i>0;i=parseInt(i/16)) {
        result.push(i%16);
    }
    
    for (i=0;i<result.length;i++) {
        switch(result[i]) {
            case 10:
            result[i]="A";
            break;
            
            case 11:
            result[i]="B";
            break;
            
            case 12:
            result[i]="C";
            break;
            
            case 13:
            result[i]="D";
            break;
            
            case 14:
            result[i]="E";
            break;
            
            case 15:
            result[i]="F";
            break;
        }
    }
   
    return result.reverse().join("");
}
