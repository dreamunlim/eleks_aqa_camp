function calc(...args) {
    let [a, b, operation] = args;
    const aggregatedErrorMsg = [];

    const operations = {
        "+": add,
        "-": subtract,
        "/": divide,
        "*": multiply
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function divide(a, b) {
        if (b === 0) {
            throw `Division by zero: ${a} / ${b}`;
        }

        return a / b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function checkDataFormat() {
        // explicit conversion to Number type
        a = Number(a);
        b = Number(b);

        // type validation
        const invalidA = Number.isNaN(a);
        const invalidB = Number.isNaN(b);
        const validOperation = operations.hasOwnProperty(operation);

        if (invalidA) {
            aggregatedErrorMsg.push(`${aggregatedErrorMsg.length + 1}) Variable '${args[0]}' is NaN`);
        }

        if (invalidB) {
            aggregatedErrorMsg.push(`${aggregatedErrorMsg.length + 1}) Variable '${args[1]}' is NaN`);
        }

        if (! validOperation) {
            aggregatedErrorMsg.push(`${aggregatedErrorMsg.length + 1}) Operation '${operation}' is invalid`);
        }

        if (aggregatedErrorMsg.length) {
            throw aggregatedErrorMsg.join("\n");
        }
    }

    function doOperation() {
        return operations[operation](a, b);
    }

    return (function startProgram() {
        try {
            checkDataFormat();
            return doOperation();
        } catch (error) {
            // console.log("Error: ", error);
            throw error;
        }
    })();
}

export default calc;