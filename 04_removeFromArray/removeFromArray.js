const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x))
};

console.log(removeFromArray([1, 2, 3], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
