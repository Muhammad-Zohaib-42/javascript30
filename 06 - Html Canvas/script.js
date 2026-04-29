const box = document.querySelector(".box")
let drag = false
let count = 0

box.addEventListener("mousedown", () => drag = true)

box.addEventListener("mousemove", () => {
    if (drag) {
        count++
        console.log("drawing...", count)
    }
})

box.addEventListener("mouseout", () => drag = false)

box.addEventListener("mouseup", () => drag = false)