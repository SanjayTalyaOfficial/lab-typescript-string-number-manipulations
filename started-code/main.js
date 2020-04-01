"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(2));
        console.log(word.concat('anotherword'));
        console.log(word.slice(1, 3));
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str.replace(/[^aeiou]/gi, "").length);
    };
    return StringManipulations;
}());
var object = new StringManipulations();
object.print('example');
object.printWithSpace('examplewithspace');
object.findVowel('examplevowel');
var NumberManipulation = /** @class */ (function () {
    function NumberManipulation() {
    }
    NumberManipulation.prototype.findPrime = function (num) {
        console.log(num);
        if (num % 2 === 0) {
            console.log(num + "is not a prime number");
        }
        else {
            console.log(num + "is a prime number");
        }
    };
    NumberManipulation.prototype.findMagic = function (num) {
        console.log("consider a number 199 -> 1 + 9 + 9 = 19 -> 1 + 9 = 10 -> 1 + 0 = 1. So 199 is a magic number.");
        console.log(num);
        if (num % 9 == 1) {
            console.log(num + "is a magic number");
        }
        else {
            console.log(num + "is not a magic number");
        }
    };
    return NumberManipulation;
}());
var obj = new NumberManipulation();
obj.findPrime(33);
obj.findMagic(48);
