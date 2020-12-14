function getMean(numbers) {

    // Check to make sure data is valid
    if (numbers.some(isNaN)) {
        return false;
    }

    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return (sum / numbers.length);
}


function getMode(numbers) {

    // Check to make sure data is valid
    if (numbers.some(isNaN)) {
        return false;
    }

    let data = {};

    // Make an object that contains all the numbers and how often they're repeated
    for (const number of numbers) {
        if (data[`${number}`]) {
            data[`${number}`]++;
        } else {
            data[`${number}`] = 1;
        }
    }

    // Find the highest frequency of a repeating number
    let highestFreq = 0;
    for (const number in data) {
        if (data[`${number}`] > highestFreq) {
            highestFreq = data[`${number}`];
        }
    }

    // Add the most repeated number to an array
    const modeResult = [];
    for (const number in data) {
        if (data[`${number}`] === highestFreq) {
            modeResult.push(+number);
        }
    }

    return modeResult;
}

function getMedian(numbers){

    // Check to make sure data is valid
    if (numbers.some(isNaN)) {
        return false;
    }

    // sort and get the middle element
  
    numbers.sort((a, b) => a - b);
  
    let middleIndex = Math.floor(numbers.length / 2);
    let median;
  
    if (numbers.length % 2 === 0) {
      median = (numbers[middleIndex] + numbers[middleIndex - 1]) / 2;
    } else {
      median = numbers[middleIndex];
    }
    return median
  }


module.exports = {
    getMean,
    getMode,
    getMedian
}