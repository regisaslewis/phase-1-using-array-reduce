const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function batteryAdd() {
    let count = 0;
    for (let battery of batteryBatches) {
        count += battery;
    };
    return count;
}

const totalBatteries =  batteryBatches.reduce(batteryAdd, 0);