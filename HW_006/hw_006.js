let hw_006 = new Homework_006();

function Homework_006() {
    let tasksDescription = [ // from 1 to 4
        "A function to get the last element of an array",
        "A program to join all elements of the array into a string",
        "Compute the sum of two arrays same index values and save them to a third array",
        "A program to calculate the area and perimeter of a rectangle",
    ];

    let tasksData = [ // from 1 to 4
        ["#", "\\", 4, -8, "+", "@"],
        [["/"], ["#", "\"", 4, -8, "+", "@"]], // order: separator, string
        [[2, 3, 4, 8, 10], [2, 3, 4, 8, "f"]],
        [3, 5] // width, height
    ];

    let tasksFunctions = [ // from 1 to 4
        (arr) => {
            if (arr.length) {
                console.log("Array last element: ", arr[arr.length - 1]);
            } else {
                console.log("Array is empty");
            }
        },

        ([separator, arr] = data) => {
            let joinedStr = arr.join(separator);
            console.log("Joined string: ", joinedStr);
        },

        ([arr1, arr2] = data) => {
            try {
                if (arr1.length === arr2.length) {
                    let sumOfArrayValues = arr1.map((arr1Elem, i) => {
                        // check for NaNs before addition
                        if (isNaN(arr1Elem) || isNaN(arr2[i])) {
                            throw `The addition pair contains NaNs: [${arr1Elem}: ${typeof arr1Elem}; ${arr2[i]}: ${typeof arr2[i]}]`;
                        }
                        return arr1Elem + arr2[i];
                    });

                    console.log("Result array: ", sumOfArrayValues);
                } else {
                    throw "Array1 and Array2 lengths mismatch";
                }
            } catch (error) {
                console.log("Error: ", error);
            }
        },

        ([width, height] = arr) => {
            let rectangle = {
                width: width,
                height: height,
                area: width * height,
                perimeter: 2 * (width + height),
                getArea: function () {
                    console.log("Rectangle area: ", this.area);
                },
                getPerimeter: function () {
                    console.log("Rectangle perimeter: ", this.perimeter);
                }
            };

            rectangle.getArea();
            rectangle.getPerimeter();
        }
    ];

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