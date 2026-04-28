const items = document.querySelectorAll(".item")

items.forEach(item => {
  item.addEventListener("click", e => {
    items.forEach(item => {
      if (item !== e.target) {
        item.classList.remove("grow")
      }
    })
    item.classList.toggle("grow")
  })
})