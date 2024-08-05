
//taks 1
const books = [
    {
        title: "Harry Potter",
        author: "Joanne Rowling",
        year: 2007,
        availability: true
    }, 
    {
        title: "The Lord of the Rings",
        author: "John Ronald Reuel Tolkien",
        year: 1955,
        availability: true
    },
    {
        title: "The Hobbit",
        author: "John Ronald Reuel Tolkien",
        year: 1958,
        availability: false
    },
    {
        title: "The Witcher",
        author: "Andrzej Sapkowski",
        year: 2013,
        availability: false
    }
]

function displayTitlesAvailable(arr) {
    arr.forEach(el => {
        if (el.availability === true) console.log(el.title);
    })
}

displayTitlesAvailable(books);

function findOldesBook(arr) {
    let oldest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].year < oldest.year) {
            oldest = arr[i]
        }
    }

    return oldest;
}

console.log(findOldesBook(books));

function countBooks(arr, author) {
    let count = 0;
    arr.forEach(el => {
        if (el.author === author) count++;
    })

    return count;
}

console.log(countBooks(books, "John Ronald Reuel Tolkien"));

function findRecentBook(arr) {
    let recent = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].year > recent.year) {
            recent = arr[i]
        }
    }

    return recent;
}

console.log(findRecentBook(books));

function updateAvailability(arr, title) {
    let book;

    arr.forEach(el => {
        if (el.title === title) {
            el.availability = true
            book = el
        }
    })

    return book;
}

console.log(updateAvailability(books, "The Hobbit"));

// task 2
const dictionary = {
    addWord(key, val) {
        this[key] = val;
    },
    getEntry(val) {
        return this[val];
    },
    getAllWords() {
        return Object.keys(this);
    },
    getAllEntries() {
        return Object.entries(this);
    }
}
dictionary.addWord("JavaScript", `A high-level, often just-in-time compiled
language that conforms to the ECMAScript specification.`);
dictionary.addWord("Dictionary", `A collection of words and their meanings.`);

console.log(dictionary.getEntry("JavaScript"));
console.log(dictionary.getAllWords("JavaScript"));
console.log(dictionary.getAllEntries("JavaScript"));
