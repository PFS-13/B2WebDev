function getData() {
    setTimeout(() => {
        console.log("Data retrieved");
        return "Data";
    }, 500);
}

function processData(data) {
    setTimeout(() => {
        console.log("Processing data:", data);
        return "Processed Data";
    }, 400);
}

function saveData(data) {
    setTimeout(() => {
        console.log("Saving data:", data);
        console.log("Data saved");
    }, 300);
}


getData();
processData("Data");
saveData("Processed Data");
