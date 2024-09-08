function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data retrieved");
            resolve("Data");
        }, 500);
    });
}

function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Processing data:", data);
            resolve("Processed Data");
        }, 400);
    });
}

function saveData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Saving data:", data);
            resolve("Data saved");
        }, 300);
    });
}

getData()
    .then(processData)
    .then(saveData)
    .then((message) => {
        console.log(message);
    });
