const submitBtn = document.getElementById("submit_btn")
const title = document.getElementById("title")

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
})

/* onload = () => {
    alert('Page is loaded!')
} */

title.onmouseover = () => {
    title.style.color = "#fff";
    title.style.backgroundColor = "#000";
}

title.onmouseout = () => {
    title.style.color = "#21cd66";
    title.style.backgroundColor = "#fff"
}
