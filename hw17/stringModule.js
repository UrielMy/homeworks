export class Helper {
  result = [];
  reverse(str) {
    let reverseResult = str.split("").reverse().join("");
    this.setResult("reverse", Object.values(arguments), reverseResult);
    return reverseResult;
  }
  nTimes(str, times) {
    let newStr = "";
    for (let i = 0; i < times; i++) {
      newStr = newStr + str;
    }
    this.setResult("nTimes", Object.values(arguments).join(","), newStr);
    return newStr;
  }
  getPart(str) {
    let newStr = str.slice(0, Math.round(str.length / 2));
    this.setResult("getPart", Object.values(arguments), newStr);
    return newStr;
  }
  removeDuplicates(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (newStr.indexOf(str[i]) == -1) {
        newStr = newStr + str[i];
      }
    }
    this.setResult("removeDuplicates", Object.values(arguments), newStr);
    return newStr;
  }
  getHistory = function () {
    return this.result.join("\n");
  };
  setResult(funcName, args, result) {
    this.result.push(
      `Функция: ${funcName}, аргументы: ${args}, результат: ${result}`
    );
  }
}
