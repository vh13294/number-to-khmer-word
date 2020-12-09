import { decimalToWord } from "./decimalToWord";
import { integerToWord } from "./integerToWord";

const decimalSymbol = {
    decimalPoint: 'ចុច',
    decimalComma: 'ក្បៀស'
}

export const separator = '-';

export function numberToWord(input: number | string): string {
    const num = Number(input);

    if(isNaN(num)) {
        throw Error('The number format is invalid')
    }

    if(Number.isInteger(num)) {
        return integerToWord(num)
    } else {
        return handleDecimal(input.toString())
    }
}

function handleDecimal(input: string): string {
    const [integer, decimal] = input.split('.')
    const integerPart = integerToWord(Number(integer))
    const decimalPart = decimalToWord(decimal)
    return `${integerPart}-*${decimalSymbol.decimalComma}*${decimalPart}`
}