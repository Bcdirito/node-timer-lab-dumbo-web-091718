let timeLeft = 0,
argv = process.argv

if (!argv[2]){
    console.log("Please provide an argument!")
    process.exit(1)
} else if (argv[2][1] === "s"){
    timeLeft = (Number(argv[2][0]) - 1) + "s"
} else {
    let num = ((Number(argv[2][0]) * 60) - 1)
    if (num > 60){
        let div = (num/60).floor + "m, "
        let sec = (num % 60) + "s"
        timeLeft = div + sec
    } else {
        timeLeft = num + "s"
    }
   
}

let interval = setInterval(() => {
    console.log(`Left: ${timeLeft}`)
    timeLeft -= 1
    if (timeLeft === 0){
        clearInterval(interval)
        process.exit(0)
    }

}, 1000)