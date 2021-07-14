export class Helper {
  result = [];
  reverse(str) {
    let reverseResult = str.split("").reverse().join("");
    this.result.push(
      `Функция: reverse, аргументы: ${Object.values(arguments).join(
        ","
      )},  результат: ${reverseResult}`
    );
    return reverseResult;
  }
  nTimes(str, times) {
    let newStr = "";
    for (let i = 0; i < times; i++) {
      newStr = newStr + str;
    }
    this.result.push(
      `Функция: nTimes, аргументы: ${Object.values(arguments).join(
        ","
      )},  результат: ${newStr}`
    );
    return newStr;
  }
  getPart(str) {
    let newStr = str.slice(0, Math.round(str.length / 2));
    this.result.push(
      `Функция: getPart, аргументы: ${Object.values(arguments).join(
        ","
      )},  результат: ${newStr}`
    );
    return newStr;
  }
  removeDuplicates(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (newStr.indexOf(str[i]) == -1) {
        newStr = newStr + str[i];
      }
    }
    this.result.push(
      `Функция: removeDuplicates, аргументы: ${Object.values(arguments).join(
        ","
      )},  результат: ${newStr}`
    );
    return newStr;
  }
  getHistory = function () {
    return this.result.join("\n");
  };
}
