
// Task 1: Create a Class for a Book
// sub-task 1 | Create a class named Book
class Book {
    constructor(title, author, yearPublished, isbn) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
        this.isbn = isbn;
    }

    // sub-task 2 | Add a method called getSummary
    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Year Published: ${this.yearPublished}`;
    }
}

// sub-task 3 | Create an instance of the Book class
const book1 = new Book("2001: A Space Odyssey", "Arthur Clarke", 1968, 111);
const book2 = new Book("I, Robot", "Ayzek Asimov", 1950, 222);
const book3 = new Book("Solaris", "Stanislaw Lem", 1961, 333);

// sub-task 4 | Call the getSummary method
console.log(`Single summary:\n${book1.getSummary()}\n`);


// Task 2: Create a Library Management System

/**
 * sub-task 2 | Create a class named Book
 * for this task i took class Book from prevous task (task 1)
 */

// sub-task 1 | Create a class named Library
class Library {
    constructor() {
        this.arr = [];
    }

    addBook(book) {
        this.arr.push(book);
    }

    // sub-task 3 | Add a method to the Library class called findBookByISBN(isbn)
    findBookByISBN(isbn) {
        this.arr.forEach(el => {
            if (el.isbn === isbn) {
                console.log(`\nFound by ISBN:\n${el.getSummary()}`)
            } else return null
        });
    }

    listBooks() {
        this.arr.forEach(el => {
            console.log(el.getSummary());
        })
    }
}

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.listBooks();
library.findBookByISBN(222)


// Task 3. Implementing Object-Oriented Programming in JavaScript
class Device {
    #name;
    #type;

    constructor(name, type) {
        this.#name = name;
        this.#type = type;
    }
}

class SmartDevice extends Device {
    #isSmart;

    constructor(name, type, isSmart) {
        super(name, type);
        this.#isSmart = isSmart;
    }

    get isSmart() {
        return this.#isSmart ? true : false;
    }

    set isSmart(val) {
        this.#isSmart = val;
    }
}

class Network {
    devices = [];
    
    addDevice(val) {
        this.devices.push(val);
    }
}

const device1 = new Device("iPhone", "smartphone");
const device2 = new SmartDevice("MacBook", "laptop", true);
const network = new Network();

network.addDevice(device1);
network.addDevice(device2);

console.log(`\nIs device smart? ${device2.isSmart}`);
console.log(network.devices);

device2.isSmart = false;
console.log(`Is device smart now? ${device2.isSmart}`);


// Task 4: Student Management System
// sub-task 1 | Create a class Person
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// sub-task 2 | Create a class Student that inherits from Person
class Student extends Person {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
        this.courses = [];
    }

    enroll(course) {
        this.courses.push(course);
    }

    getCourses() {
        for (let c of this.courses) {
            return c;
        };
    }
}

// sub-task 3 | Create a class Course
class Course {
    constructor(courseName, courseCode, credits) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.credits = credits;
    }

    getCourseInfo() {
        return `The course is: ${this.courseName}, code: ${this.courseCode}, cost: ${this.credits}`;
    }
}

// sub-task 4 | Create a class University
class University {
    constructor() {
        this.students = [];
        this.courses = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    addCourse(course) {
        this.courses.push(course);
    }

    getStudentInfo(id) {
        for (let s of this.students) {
            if (s.studentId === id) return s;
        }
    }
}

// sub-task 5 | Test the implementation
const student1 = new Student("John", "Dou", 25, 111);
const student2 = new Student("Will", "Smith", 45, 222);

const course1 = new Course("Java", 1, 1000);
const course2 = new Course("Python", 2, 1500);

student1.enroll(course1);
student1.enroll(course2);

const university = new University();

university.addStudent(student1);
university.addStudent(student2);
university.addCourse(course1);
university.addCourse(course2);

console.log(university.getStudentInfo(111));
