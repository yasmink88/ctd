//saving the HTML elements we need in variables
const calculator = document.querySelector(".calculator");
const display = document.querySelector(".display")
const keys = document.querySelector(".keys");

//adding the event listener to the buttons
keys.addEventListener("click", (element) => {

    
  if (element.target.matches("button")) {
    const key = element.target; //getting each button
    const action = key.dataset.action; //getting the action (HTML attribute data-action) of the buttons
    const keyContent = key.textContent //getting the content of each button
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
        switch (action) {
            case "add": 
            if(!displayContent.includes('+')) {
                display.textContent = displayContent + '+'
            }
            
                
                break;
            case "subtract": if(!displayContent.includes('-')) {
                display.textContent = displayContent + '-'
            }
                
                break;
            case "multiply": if(!displayContent.includes('*')) {
                display.textContent = displayContent + '*'
            }
                
                break;
            case "divide": if(!displayContent.includes('/')) {
                display.textContent = displayContent + '/'
            }
                
                break;
        
            default:
                break;
        }
        console.log("You clicked on an operator key")
        key.classList.add('operatorPressed')

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
