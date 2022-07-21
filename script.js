// LINKING JS TO HTML
const dateForm = document.getElementById("date");

const countDown = document.getElementById("countdown-box");

// EVENT LISTNERS
dateForm.addEventListener('submit', e => {

    e.preventDefault()

    const dateInput = document.getElementById("date-input")
    const timeInput = document.getElementById("time-input")
    const eventDate = Date.parse(dateInput.value + "" + timeInput.value)

    window.eventCountdown && clearInterval(window.eventCountdown)
