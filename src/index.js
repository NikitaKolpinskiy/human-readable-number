module.exports = function toReadable(number) {
    let numbersDictionary = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    };

    let readableNumber;

    if (numbersDictionary.hasOwnProperty(number) && number != 100)
        return numbersDictionary[number];

    if (number >= 100) {
        readableNumber =
            numbersDictionary[Math.floor(number / 100)] +
            " " +
            numbersDictionary[100];
        if (number % 100 != 0) {
            if (numbersDictionary.hasOwnProperty(number % 100)) {
                readableNumber += " " + numbersDictionary[number % 100];
            } else {
                readableNumber +=
                    " " +
                    numbersDictionary[
                        number - Math.floor(number / 100) * 100 - (number % 10)
                    ];
                if (number % 10 != 0) {
                    readableNumber += " " + numbersDictionary[number % 10];
                }
            }
        }
    } else {
        readableNumber = numbersDictionary[number - (number % 10)];
        if (number % 10 != 0) {
            readableNumber += " " + numbersDictionary[number % 10];
        }
    }

    return readableNumber;
};