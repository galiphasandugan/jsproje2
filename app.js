const button = document.querySelector("button")
const body = document.querySelector("body")
color =["red", "blue", "purple", "pink", "white", "tomato","black"]

body.style.backgroundColor = "pink"
button.style.fontSize = "20px"

button.addEventListener("click",result)

function result(){
    const index =  Math.round(Math.random()*color.length)
    body.style.backgroundColor = color[index]
}