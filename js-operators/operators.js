
// Task 1
let height = 3;
let width = 3;
let length = 5;
let can = 16;

const result = 2 * (length * height) + 2 * (width * height);
console.log(Math.ceil(result / can));

// Task 2
let ticketNumber = 871529;
let firsHalfSum = 0;
let secondHalfSum = 0;
let convertedTicketNumber = String(ticketNumber)

if (convertedTicketNumber.length % 2 === 0) {
    let count = convertedTicketNumber.length / 2;
    let firsHalf = convertedTicketNumber.slice(0, count);
    let secondHalf = convertedTicketNumber.slice(
        count, convertedTicketNumber.length);
    for (let el in firsHalf) {
        firsHalfSum += Number(firsHalf[el]);
        secondHalfSum += Number(secondHalf[el]);
    }
    if (firsHalfSum === secondHalfSum) {
        console.log("YES");
    } else {
        console.log("NO");
    }
} else {
    console.log("NO");
}