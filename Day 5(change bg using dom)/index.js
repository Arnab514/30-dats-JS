const btn = document.querySelector("#btn")

function random(num) {
    return Math.floor(Math.random() * (num + 1))
}

btn.addEventListener("click", () => {
    const randomColor = rgb(`${random(255)}` `${random(255)}` `${random(255)}`)
    document.body.style.backgroundColor = randomColor
})