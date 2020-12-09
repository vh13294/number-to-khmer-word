const SINGLE_DIGIT = ['សូន្យ', 'មួយ', 'ពីរ', 'បី', 'បួន', 'ប្រាំ', 'ប្រាំមួយ', 'ប្រាំពីរ', 'ប្រាំបី', 'ប្រាំបួន'];

const separator = '-';

export function decimalToWord(num: string): string {
    const numArr = num.split('')
    const digitArr = numArr.map((char) => {
        return separator + SINGLE_DIGIT[Number(char)]
    })

    return digitArr.join('');
}