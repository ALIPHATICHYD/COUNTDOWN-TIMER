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

    const eventCountdown = setInterval(()=> {
        window.eventCountdown = eventCountdown
        const now = new Date().getTime()

        // MATHEMATICAL WORKINGS
        const daysDivider = 1000 * 60 * 60 * 24
        const hoursDivider = 1000 * 60 * 60 
        const minutesDivider = 1000 * 60
        const secondsDivider = 1000
