//saving the HTML elements we need in variables
const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display")
const keys = calculator.querySelector(".keys");

//adding the event listener to the buttons
keys.addEventListener("click", (element) => {

    
  if (element.target.matches("button")) {
    
    const key = element.target; //getting each button
    const keyContent = key.textContent //getting the content of each button
    const action = key.dataset.action; //getting the action (HTML attribute data-action) of the buttons
    let displayContent = display.textContent //getting the content of the display
    
    //determining which button is clicked
    if (!action) {
        if (displayContent === "0") {
            display.textContent = keyContent
        } else {
            display.textContent = displayContent + keyContent
        }

    } 
    
    else if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {


       /*  switch (action) {
            case "add":  display.textContent = displayContent + '+'
            
                break;
            case "subtract": display.textContent = displayContent + '-'
                
                break;
            case "multiply": display.textContent = displayContent + '*'
                
                break;
            case "divide": display.textContent = displayContent + '/'
                
                break;
            default:
                break;
        } */
        console.log("You clicked on an operator key")

    }

    else if (action === "clear") {
        console.log("You cleared everything!")
    }

    else if (action === "decimal") {
            if(!displayContent.includes('.')) {
            display.textContent = displayContent + '.'
        }
        
    }

    else if (action === "calculate") {
        let result = displayContent
        console.log(result)
        
    }
  }
});
