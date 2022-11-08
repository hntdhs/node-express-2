


function hourNumberToWord(number) {
    const hourUnits = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"]
    let numberFromInputtedString = Number(number)
    let hourNumberAsWord = hourUnits[numberFromInputtedString]
    return hourNumberAsWord;
}

function miuteNumberToWord(number) {
    const minuteUnits = ["o'clock", "oh one", "oh two", "oh three", "oh four", "oh five", "oh six", "oh seven", "oh eight", "oh nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty", "thirty one", "thirty two", "thirty three", "thirty four", "thirty five", "thirty six", "thirty seven", "thirty eight", "thirty nine", "forty", "forty one", "forty two", "forty three", "forty four", "forty five", "forty six", "forty seven", "forty eight", "forty nine", "fifty", "fifty one", "fifty two", "fifty three", "fifty four", "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine"]
    let numberFromInputtedString = Number(number)
    let minuteNumberAsWord = minuteUnits[numberFromInputtedString]
    return minuteNumberAsWord;
}

function timeWord(word) {
    if (word === "00:00") {
        return ("midnight")
    } else if (word === "12:00") {
        return ("noon")
    } else {
        let splitTime = word.split(":");
        let hour = hourNumberToWord(splitTime[0])
        let minute = miuteNumberToWord(splitTime[1])
        if (Number(splitTime[0]) > 11) {
            amOrPm = "pm"
        } else {
            amOrPm = "am"
        }

        return output = (hour + " " + minute + " " + amOrPm);
    }
}


console.log(timeWord("00:00"))
// ['01', '01']



module.exports = { timeWord, miuteNumberToWord }