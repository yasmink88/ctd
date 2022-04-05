const submitBtn = document.getElementById("submit_btn")
const title = document.getElementById("title")
const nameField = document.getElementById("name")
const countName = document.querySelector(".count")

let count = 0

nameField.addEventListener('keyup', (event)=> {
    console.log(event.key)
    if (event.key == "Backspace") {
        count--
    } else if (event.key == "Shift") {
        count
    } else {
        count++
    }
    
     countName.innerHTML = `${nameField.value} = ${count}`
})

window.onload = () => {
    alert("Page loaded!")
}
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
})

title.onmouseover = () => {
    title.style.color = "#fff";
    title.style.backgroundColor = "#000";
}

title.onmouseout = () => {
    title.style.color = "#21cd66";
    title.style.backgroundColor = "#fff"
}

