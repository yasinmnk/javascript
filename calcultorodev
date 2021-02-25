function cal(input1, input2, sign) {
  var result;

  var fault = [];

  if (typeof input1 != "number" && typeof input2 != "number") {
    fault.push("your values are not number");
    if ((sign != "+", "-", "/", "*"));
    fault.push("your sign is unvalid");
  } else if (sign == "+") {
    result = input1 + input2;
  } else if (sign == "-") {
    result = input1 - input2;
  } else if (sign == "/" && input2 === 0) {
    fault += "fault to divide number 0";
  } else if (sign == "/") {
    result = input1 / input2;
  } else if (sign == "*") {
    result = input1 * input2;
  } else {
    fault.push("your sign must be +,-,/,*.. ");
  }
  return {
    opResult: result == 0 || result ? result : "unvalid",
    fault: fault.length > 0 ? fault : ["valid"],
  };
}
console.log(cal(4500, 0, "o"));
