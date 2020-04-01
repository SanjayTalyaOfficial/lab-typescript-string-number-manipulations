import { NumberManipulationService, StringManipulationService } from "./main-service";



class StringManipulations implements StringManipulationService {
    public print(word:string): void {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(2));
        console.log(word.concat('anotherword'));
        console.log(word.slice(1,3));
        console.log(word.length);
    }

    public printWithSpace(sentence:string): void {
        console.log(sentence.split("").join(" "));
    }
    public findVowel(str:string) : void {
        console.log(str.replace(/[^aeiou]/gi, "").length);
    }
}

let object = new StringManipulations();
object.print('example');
object.printWithSpace('examplewithspace');
object.findVowel('examplevowel');



    class NumberManipulation implements NumberManipulationService {
        findPrime(num:number):void{
            console.log(num);
            if(num%2===0)
            {
                console.log(num+"is not a prime number");
            }
            else
            {
                console.log(num+"is a prime number");
            }
        }
        findMagic(num:number):void{
            console.log("consider a number 199 -> 1 + 9 + 9 = 19 -> 1 + 9 = 10 -> 1 + 0 = 1. So 199 is a magic number.");
            console.log(num);
            if(num % 9 == 1) {
                console.log(`${num}is a magic number`);
            }
            else{
                console.log(num+"is not a magic number");
            }
        }
    }
let obj = new NumberManipulation();
obj.findPrime(33);
obj.findMagic(48);

