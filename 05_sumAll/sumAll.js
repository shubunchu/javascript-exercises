const sumAll = function(start, end) {
    let sum = 0;
    if (start > end) {
        end = [start, start = end][0];
    }
    if ((start || end) < 0) {
        return "ERROR";
    }
    if ((typeof(start) != "number") || (typeof(end) != "number")) {
        return "ERROR";
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
