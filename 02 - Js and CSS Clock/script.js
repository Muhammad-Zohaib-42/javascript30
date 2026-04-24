const secondsHand = document.querySelector(".seconds")
const minutesHand = document.querySelector(".minutes")
const hoursHand = document.querySelector(".hours")

setInterval(() => {
    const date = new Date()

    const seconds = date.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) - 90
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = date.getMinutes()
    const minutesDegrees = ((minutes / 60) * 360) - 90
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = date.getHours()
    const hoursDegrees = ((hours / 12) * 360) - 90
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
}, 1000);