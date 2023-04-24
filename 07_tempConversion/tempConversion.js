const convertToCelsius = function(temp) {
  let result = (5/9) * (temp - 32);
  if (Number.isInteger(result)) {
    return result;
  } else {
    return Number(result.toFixed(1));
  }
};

const convertToFahrenheit = function(temp) {
  let result = (9/5 * temp) + 32;
  if (Number.isInteger(result)) {
    return result;
  } else {
    return Number(result.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
