
// task 1
function scoreEvalautor(n) {
    let participants = [];
    let highest = 0;

    for (let i = 0; i < n; i++) {
        participants.push(Math.floor(Math.random() * 100))
        if (highest < participants[i]) {
            highest = participants[i];
        }
    }

    return `score of all participants: ${participants} \nheighest score ${highest}`;
}

console.log(scoreEvalautor(15));

// task 2
function converter(num, from, to) {
    let result;

    if (from === "c" && to === "f") {
        result = (num * 9/5) + 32;
    } else if (from === "c" && to === "k") {
        result = num + 273.15;
    } else if (from === "f" && to === "c") {
        result = (num - 32) * 5 / 9;
    } else if (from === "f" && to === "k") {
        result = (num - 32) * 5 / 9 + 273.15;
    } else if (from === "k" && to === "c") {
        result = num - 273.15;
    } else if (from === "k" && to === "f") {
        result = (num - 273.15) * 9 / 5 + 32;
    }

    return parseFloat(result).toFixed(2);
}

console.log("\n" + converter(100, "c", "k"));
