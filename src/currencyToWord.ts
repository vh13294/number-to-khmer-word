import { Separator } from './helpers/constant';
import { integerToWord } from './helpers/integerToWord';

const AndWord = 'និង'
const SharpWord = 'គត់'
const Cent = 'សេន'

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

    if(num < 100) {
        const result = 
            integerPart +
            ` ${currencyName} ` +
            SharpWord
            
        return result
    } else {
        const index = integerPart.lastIndexOf(Separator)
        const result = 
            integerPart.substring(0, index) +
            ` ${AndWord}` + 
            ` ${integerPart.substring(index + 1)}` + 
            ` ${currencyName} ` +
            SharpWord
            
        return result
    }
}

function handleDecimal(input: string, currencyName: string): string {
    let [integer, decimal] = input.split('.')
    const integerPart = integerToWord(Number(integer))

    // handle 0.5 => 0.50, retain 0
    // fifty instead of five cent
    if(decimal.length === 1) {
        decimal = decimal + '0'
    }
    const decimalPart = integerToWord(Number(decimal))

    const result = 
        integerPart +
        ` ${currencyName}` + 
        ` ${AndWord}` + 
        ` ${decimalPart} ` + 
        Cent
        
    return result
}