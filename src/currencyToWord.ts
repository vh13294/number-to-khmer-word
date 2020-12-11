import { integerToWord } from './helpers/integerToWord';
import { numberToWord } from './numberToWord';

const AndWord = 'និង'
const SharpWord = 'គត់'
const CentWord = 'សេន'

type Currency = keyof typeof currencyCountry

const currencyCountry = {
    USD: {
        symbol: '$',
        name: 'ដុល្លារ',
    },
    KHR: {
        symbol: '៛',
        name: 'រៀល',
    }
}

export function currencyToWord(input: number | string, currency: Currency): string {
    const num = Number(input);

    if (isNaN(num)) {
        throw Error('The number format is invalid')
    }

    const { symbol, name } = currencyCountry[currency]
    let result = ''

    if (Number.isInteger(num)) {
        result = handleInteger(input.toString(), name)
    } else {
        result = handleDecimal(input.toString(), name)
    }

    return `${symbol}  ${result}`
}

function handleInteger(input: string, currencyName: string): string {
    const num = Number(input)
    const integerPart = integerToWord(num)

    const result =
        integerPart +
        ` ${currencyName} ` +
        SharpWord

    return result
}

function handleDecimal(input: string, currencyName: string): string {
    let [integer, decimal] = input.split('.')
    const integerPart = integerToWord(Number(integer))

    if(decimal.length < 2) {
        // handle 0.5 => 0.50, retain 0
        // fifty instead of five CentWord
        if (decimal.length === 1) {
            decimal = decimal + '0'
        }
        const decimalPart = integerToWord(Number(decimal))

        const result =
            integerPart +
            ` ${currencyName}` +
            ` ${AndWord}` +
            ` ${decimalPart} ` +
            CentWord

        return result
    } else {
        const num = numberToWord(Number(input))

        const result = num + ` ${currencyName}`
        return result
    }
}