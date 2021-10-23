let hw_005 = new Homework_005();

function Homework_005() {
    let tasksDescription = [ // from 1 to 5
        "A function to check if a given string includes a given symbol",
        "A function to check whether a string is blank or not",
        "A function to convert a string into abbreviated form",
        "A function that accepts two integers and displays the larger one",
        "A function with conditional statement to sort three numbers"
    ];

    let tasksData = [ // from 1 to 5
        ["#", "qwerty#_+https"], // order: symbol, string
        ["    "], // is blank?
        ["Name Surname"], // to abbreviate
        [32, -76], // the largest of two
        [346, -56, -2] // to sort
    ];

    let tasksFunctions = [ // from 1 to 5
        ([symbol, str] = arr) => {
            let index = str.indexOf(symbol);
            if (index !== -1) {
                console.log(`Symbol "${symbol}" is located at index ${index}`);
            } else {
                console.log(`Symbol "${symbol}" is absent in string "${str}"`);
            }
        },

        ([str] = arr) => {
            let blank = str.length === 0;
            let regex = /^(?: )+$/ig; // matches all-spaces string
            let allSpaces = regex.test(str);

            if (blank || allSpaces) {
                console.log("The string is blank: ", blank || allSpaces);
            } else {
                console.log("The given string is not blank");
            }
        },

        ([str] = arr) => {
            let abbrStr = str
                .split(" ")
                .map((elem) => elem.charAt(0).toUpperCase() + ".")
                .join("");

            console.log("Result: ", abbrStr);
        },

        ([a, b] = arr) => {
            console.log("The largest integer: ", a > b ? a : b);
        },

        (arr) => {
            insertionSort(arr);
            console.log(arr);
        }
    ];

    // sort in ascending order
    function insertionSort(array) {
        for (let j = 1; j < array.length; ++j) {
            let value = array[j];
            
            let i = j - 1;
            while (i >= 0 && array[i] > value) {
                array[i + 1] = array[i];
                --i;
            }

            array[i + 1] = value;
        }
    }

    (function startProgram() {
        let taskPointer = 0;
        while (taskPointer < tasksData.length) {
            console.log("\n" + tasksDescription[taskPointer]); // task message

            let currentTaskValue = 0;
            while (currentTaskValue < tasksData[taskPointer].length) {
                console.log(`Var${currentTaskValue}: `, tasksData[taskPointer][currentTaskValue]);
                ++currentTaskValue;
            }

            tasksFunctions[taskPointer](tasksData[taskPointer]);

            ++taskPointer;
        }
    })();
}