

const display =document.getElementById("display");

function appendToDisplay(input) {
    display.value +=input;
}
function clearDisplay(){
    display. value=" ";

    
}
function deleteLastCharater(currentInput) {
    if (currentInput.length>0) {
        return currentInput.slice(0,-1);
    }
    return currentInput;


}

function calculate() {
    try{
    display.value=eval(display.value);
    }

    catch(error){
   display.value="error";
    }
}