//pirmas kodas
function getLongestWord(word) {
    var longest = [];
    for (var i = 0; i < word.length; i++) {
        if (word[i].length > longest.length) {
            longest = word[i];
        }
    }
    return longest.length;
}
console.log(getLongestWord(["pavasaris", "vasara", "ruduo", "ziema"]));

//antras kodas
function sumTotal(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;

}
console.log(sumTotal([1, 2, 3, 4]));

//trecias kodas
function multiplyTotal(numbers) {
    var total = 1;
    for (var i = 0; i < numbers.length; i++) {
        total *= numbers[i];
    }
    return total;

}
console.log(multiplyTotal([1, 2, 3, 4]));

//ketvirtas kodas
var operations = {
    "+": function(a, b) {
        return a + b;
    },
    "-": function(a, b) {
        return a - b;
    },
    "*": function(a, b) {
        return a * b;
    },
    "/": function(a, b) {
        return a / b;
    }
};

function accumulate(list, operator) {
    return list.reduce(operations[operator]);
}

console.log(accumulate([2, 7], "-"));

//penktas kodas

var arr = [];
var duplicate = function(arr) {
    return arr.concat(arr);
}

console.log(duplicate([1, 2, 4, 0]));

//sestas kodas
function fizzBuzz() {
    var list = [];

    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            list.push("fizzbuzz");
        } else if (i % 3 === 0) {
            list.push("fizz");
        } else if (i % 5 === 0) {
            list.push("buzz");
        } else {
            list.push(i);
        }
    }
    return list;
}
fizzBuzz();

 

