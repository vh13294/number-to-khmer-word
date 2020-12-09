import { SINGLE_DIGIT } from "./integerToWord";
import { separator } from "./numberToWord";

export function decimalToWord(num: string): string {
    const numArr = num.split('')
    const digitArr = numArr.map((char) => {
        return separator + SINGLE_DIGIT[Number(char)]
    })

    return digitArr.join('');
}