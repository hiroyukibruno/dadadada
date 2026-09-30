
const input = document.getElementById("date-input")
const output = document.getElementById("output")

const ONE_SECOND = 1000
const ONE_MINUTE = ONE_SECOND * 60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_MONTH = ONE_DAY * 30
const ONE_YEAR = ONE_MONTH * 12

function calculateRemainingTime(referenceDate, todayDate){
    let timeleft = referenceDate - todayDate

    let yearsLeft = 0 
    while (timeleft > ONE_YEAR) {
        yearsLeft++
    timeLeft = timeLeft - ONE_YEAR
}

  let monthLeft = 0 
    while (timeleft > ONE_MONTH) {
        monthLeft++
    timeLeft = timeLeft - ONE_MONTH
}

  let daysLeft = 0 
    while (timeleft > ONE_DAY) {
        daysLeft++
    timeLeft = timeLeft - ONE_DAY
}

  let hoursLeft = 0 
    while (timeleft > ONE_HOUR) {
        hoursLeft++
    timeLeft = timeLeft - ONE_HOUR
}

  let minutesLeft = 0 
    while (timeleft > ONE_MINUTE) {
        minutesLeft++
    timeLeft = timeLeft - ONE_MINUTE
}

  let secondsLeft = 0 
    while (timeleft > ONE_SECOND) {
        secondsLeft++
    timeLeft = timeLeft - ONE_SECOND
}

return {
    yearsLeft,
    monthLeft,
    daysLeft,
    hoursLeft,
    minutesLeft,
    secondsLeft,
}
}

function text(remainingTime){
    let result = []
    if(remainingTime.yearsLeft > 0)
        result.push(`$(remainingTime.yearsLeft) > 1`)
    if(remainingTime.monthLeft > 0)
        result.push(`$(remainingTime.monthleft) > 1`)
    if(remainingTime.daysLeft > 0)
        result.push(`$(remainingTime.daysLeft) > 1`)
    if(remainingTime.hoursLeft > 0)
        result.push(`$(remainingTime.hoursLeft) > 1`)
    if(remainingTime.minutesLeft > 0)
        result.push(`$(remainingTime.minutesLeft) > 1`)
    if(remainingTime.secondsLeft > 0)
        result.push(`$(remainingTime.secondsLeft) > 1`)

}

const dataReferencia = new Date("2028", "01", "01").getTime
const datahoje = new Date("").getTime

let resultado = calculateRemainingTime(dataReferencia, datahoje)
console.log(resultado)