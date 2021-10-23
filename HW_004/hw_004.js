let tasksData = [ // from 1 to 7
    ["Input two numbers: ", -3, 7],
    ["Input any string: ", "Cool potato"],
    ["Input your first name, last name and age", "Stanislav", "Talover", 35],
    ["Input a number: ", 77],
    ["Input two positive numbers: ", 45, 34],
    ["Input two positive numbers: ", 0, 50],
    ["Input a positive number: ", 21]
];

let tasksFunctions = [ // from 1 to 7
    ([a, b] = arr) => {
        console.log("Sum: ", (a + b));
    },

    ([str] = arr) => {
        console.log("Result: ", "Test " + str);
    },

    ([name, surname, age] = arr) => {
        console.log("Result: ", name, surname, age);
    },

    ([a] = arr) => {
        console.log(a, "> 100: ", a > 100);
    },

    ([a, b] = arr) => {
        console.log("a > b: ", a - b > 0);
    },

    ([a, b] = arr) => {
        let case1 = 0;
        let case2 = 0;
        let case3 = 0;

        if (a === 50) {
            case1 = 1;
            console.log("a = 50: ", a === 50);
        }

        if (b === 50) {
            case2 = 1;
            console.log("b = 50: ", b === 50);
        }

        if (a + b === 50) {
            case3 = 1;
            console.log("a + b = 50: ", a + b === 50);
        }

        if (!case1 && !case2 && !case3) {
            console.log("Neither a nor b equals 50, neither their sum equals 50");
        }
    },

    ([a] = arr) => {
        let case1 = 0;
        let case2 = 0;

        if (a % 3 === 0) {
            case1 = 1;
            console.log(a, " is a multiple of 3");
        }

        if (a % 7 === 0) {
            case2 = 1;
            console.log(a, " is a multiple of 7");
        }

        if (!case1 && !case2) {
            console.log("The number is neither multiple of 3 nor 7");
        }
    }
];

let taskPointer = 0;
while (taskPointer < tasksData.length) {
    console.log("\n" + tasksData[taskPointer][0]); // task message

    let currentTaskValue = 1; // skip message at index 0
    while (currentTaskValue < tasksData[taskPointer].length) {
        console.log(`Var${currentTaskValue}: `, tasksData[taskPointer][currentTaskValue]);
        ++currentTaskValue;
    }

    tasksFunctions[taskPointer](tasksData[taskPointer].slice(1));

    ++taskPointer;
}