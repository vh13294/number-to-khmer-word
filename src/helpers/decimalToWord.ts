import { Separator } from "./constant";
import { SINGLE_DIGIT } from "./integerToWord";

export function decimalToWord(num: string): string {
    const numArr = num.split('')
    const digitArr = numArr.map((char) => {
        return Separator + SINGLE_DIGIT[Number(char)]
    })

    return digitArr.join('');
}