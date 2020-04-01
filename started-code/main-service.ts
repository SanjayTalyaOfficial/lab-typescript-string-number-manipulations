//progression 1

export interface StringManipulationService {
    print(word:string): void;
    printWithSpace(sentence:string) : void;
    findVowel(str: string) : void;
}

//progression 3
export interface NumberManipulationService {
    findPrime(num:number):void;
    findMagic(num:number):void;
}
