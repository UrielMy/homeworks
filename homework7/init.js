let repeat = true;
let userChoice;
let oldArray;
while (repeat) {
  let splitResult;
  if (userChoice === 1) {
    splitResult = oldArray;
  } else {
    let array = prompt("Hi, pls input here array, more then 3 elements");
    splitResult = arraySplit(array);
    while (splitResult.filter(e => !Number.isNaN(Number(e))).length <= 3) {
      array = prompt("You must wrote more than 3 element, try again");
      splitResult = arraySplit(array);
    }
  }

  let numArray = arrayToNum(splitResult);

  let arrayOperations = +prompt(
    "Choose operation: \n1. Sort by deacreasing/increacing\n2. Show Even/Odd\n3. Show summ of all numbers, average number, biggest,smallest"
  );
  if (arrayOperations === 1) {
    sorting(numArray, arraySort, "desc", "asc");
  } else if (arrayOperations === 2) {
    sorting(numArray, evenOrOddArray, "even", "odd");
  } else {
    mathOperations(numArray);
  }
  repeat = confirm(`Do you want to repeat?`);
  if (repeat) {
    userChoice = +prompt("1. Continue with created array\n2. Create new array");
    if (userChoice === 1) {
      oldArray = splitResult;
    }
  }
}

// functions

function sorting(numArray, func, name1, name2)
{
  let descArr = func(numArray, name1);
  let ascArr = func(numArray, name2);
  let choseDelimiter = prompt(`Choose delimiter`);
  let arrDescDelimiter = arrayDelimiter(descArr, choseDelimiter);
  let arrAscDelimiter = arrayDelimiter(ascArr, choseDelimiter);
  alert(`Sorted by ${name1}: ${arrDescDelimiter}
Sorted by ${name2}: ${arrAscDelimiter}`);
  console.log(`Sorted by ${name1}: ${arrDescDelimiter}
Sorted by ${name2}: ${arrAscDelimiter}`);
}
function mathOperations(numArray) {
  let arrSumm = arraySumm(numArray);
  let avgSumm = arrayAverage(numArray);
  let biggestSumm = arrayBiggestNum(numArray);
  let smallestSumm = arraySmallestNum(numArray);
  alert(`Elements summ: ${arrSumm}
Elements avg: ${avgSumm}
Biggest element: ${biggestSumm}
Smallest element: ${smallestSumm}`);
  console.log(`Elements summ: ${arrSumm}
Elements avg: ${avgSumm}
Biggest element: ${biggestSumm}
Smallest element: ${smallestSumm}`);
}

function arraySplit(array) {
  let newArray = array.split(" ");
  return newArray;
}
function arrayToNum(splitResult) {
  let newArray = [];
  splitResult.forEach((element) => {
    newArray.push(+element);
  });
  return newArray.filter(e => !Number.isNaN(e));
  
}
function arraySort(array, operation) {
  let newArray = array.sort(function (a, b) {
    return a - b;
  });

  if (operation == "desc") newArray = newArray.slice().reverse();

  return newArray;
}
function evenOrOddArray(array, operation) {
  if (operation == "odd") {
    return array.filter((element) => element % 2 != 0);
  } else {
    return array.filter((element) => element % 2 == 0);
  }
}
function arraySumm(array) {
  let summ = array.reduce(function (summ, element) {
    return summ + element;
  });
  return summ;
}
function arrayAverage(array) {
  let average = arraySumm(array) / array.length;
  return average;
}
function arrayBiggestNum(array) {
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > result) {
      result = array[i];
    }
  }
  return result;
}
function arraySmallestNum(array) {
  let result = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < result) {
      result = array[i];
    }
  }
  return result;
}
function arrayDelimiter(array, question) {
  let delimiter = array.join(question);
  return delimiter;
}