const spacingInput = document.querySelector("#spacing")
const blurInput = document.querySelector("#blur")
const colorInput = document.querySelector("#color")
const frame = document.querySelector(".frame")

spacingInput.addEventListener("input", e => {
    document.documentElement.style.setProperty("--spacing", `${e.target.value}px`)
})

blurInput.addEventListener("input", e => {
    document.documentElement.style.setProperty("--blur", `${e.target.value}px`)
})

colorInput.addEventListener("input", e => {
    document.documentElement.style.setProperty("--txt-clr", e.target.value)
})