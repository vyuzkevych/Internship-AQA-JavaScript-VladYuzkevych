
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

// sub-task 1
function displayTitlesAvailable(arr) {
    arr.forEach(el => {
        if (el.availability === true) console.log(el.title);
    })
}

displayTitlesAvailable(books);

// sub-task 2
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

// sub-task 3
function countBooks(arr, author) {
    let count = 0;
    arr.forEach(el => {
        if (el.author === author) count++;
    })

    return count;
}

console.log(countBooks(books, "John Ronald Reuel Tolkien"));

// sub-task 4
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

// sub-task 5
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
    words: {},
    addWord(key, val) {
        this.words[key] = val;
    },
    getEntry(val) {
        return this.words[val];
    },
    getAllWords() {
        return Object.keys(this.words)
    },
    getAllEntries() {
        return this.words;
    }
}
dictionary.addWord("JavaScript", `A high-level, often just-in-time compiled
language that conforms to the ECMAScript specification.`);
dictionary.addWord("Dictionary", `A collection of words and their meanings.`);

console.log(dictionary.getEntry("JavaScript"));
console.log(dictionary.getAllWords());
console.log(dictionary.getAllEntries());
