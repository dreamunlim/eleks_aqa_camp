// via Promise
function promiseOddEvenNum(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject("error");
        }

        if (data % 2 === 1) {
            let ms = 1000;
            setTimeout(() => resolve("odd"), ms);
        } else {
            let ms = 2000;
            setTimeout(() => reject("even"), ms);
        }
    });
};

const num1 = promiseOddEvenNum("122");
num1
    .then(
        (result) => console.log("Your number is: ", result), // odd
        (result) => { // even
            if (result === "error") {
                throw result;
            }
            console.log("Your number is: ", result);
        }
    )
    .catch(error => console.log("Promise rejected: ", error));


// via async/await
async function asyncOddEvenNum(data) {
    if (isNaN(data)) {
        throw "error";
    }

    if (data % 2 === 1) {
        let ms = 1000;
        let result = await new Promise(resolve => setTimeout(() => resolve("odd"), ms));
        return result;
    } else {
        let ms = 2000;
        let result = await new Promise((resolve, reject) => {
            setTimeout(() => reject("even"), ms);
        });
        throw result;
    }
}

const num2 = asyncOddEvenNum("123");
num2
    .then(
        (result) => console.log("(Async) Your number is: ", result), // odd
        (result) => { // even
            if (result === "error") {
                throw result;
            }
            console.log("(Async) Your number is: ", result);
        }
    )
    .catch(error => console.log("(Async) Promise rejected: ", error));