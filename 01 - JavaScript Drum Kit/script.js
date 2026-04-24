const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const sound = button.getAttribute("data-sound")
        const audio = new Audio(`./assets/sounds/${sound}`)
        audio.play()
        button.classList.add("active")

        setTimeout(() => {
           button.classList.remove("active") 
        }, 100);
    })
})

document.body.addEventListener("keydown", e => {
    buttons.forEach(button => {
        if (button.querySelector("h2").innerText.toLowerCase() === e.key) {
            button.click()
            button.classList.add("active")
            setTimeout(() => {
                button.classList.remove("active")
            }, 100);
        }
    })
})