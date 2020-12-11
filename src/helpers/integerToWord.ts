import { Separator } from "./constant";

export const SINGLE_DIGIT = ['សូន្យ', 'មួយ', 'ពីរ', 'បី', 'បួន', 'ប្រាំ', 'ប្រាំមួយ', 'ប្រាំពីរ', 'ប្រាំបី', 'ប្រាំបួន'];
const DOUBLE_DIGIT = ['', 'ដប់', 'ម្ភៃ', 'សាមសិប', 'សែសិប', 'ហាសិប', 'ហុកសិប', 'ចិតសិប', 'ប៉ែតសិប', 'កៅសិប'];

const WORDS = {
    HUNDRED: 'រយ',
    THOUSAND: 'ពាន់',
    TEN_THOUSAND: 'ម៉ឺន',
    HUNDRED_THOUSAND: 'សែន',
    MILLION: 'លាន',
    BILLION: 'ប៊ីលាន',
    TRILLION: 'ទ្រីលាន',
}

const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const TEN_THOUSAND = 10_000;
const ONE_HUNDRED_THOUSAND = 100_000;
const ONE_MILLION = 1000_000;
const ONE_BILLION = 1000_000_000;
const ONE_TRILLION = 1000_000_000_000;
const ONE_QUADRILLION = 1000_000_000_000_000n;

export function integerToWord(num: number): string {
    let word = '';
    let remainder = 0;

    if (num < TEN) {
        word = SINGLE_DIGIT[num];

    } else if (num < ONE_HUNDRED) {
        remainder = num % TEN;
        word = DOUBLE_DIGIT[Math.floor(num / TEN)];

    } else if (num < ONE_THOUSAND) {
        remainder = num % ONE_HUNDRED;
        word = SINGLE_DIGIT[Math.floor(num / ONE_HUNDRED)] + WORDS.HUNDRED;

    } else if (num < TEN_THOUSAND) {
        remainder = num % ONE_THOUSAND;
        word = SINGLE_DIGIT[Math.floor(num / ONE_THOUSAND)] + WORDS.THOUSAND;

    } else if (num < ONE_HUNDRED_THOUSAND) {
        remainder = num % TEN_THOUSAND;
        word = SINGLE_DIGIT[Math.floor(num / TEN_THOUSAND)] + WORDS.TEN_THOUSAND;

    } else if (num < ONE_MILLION) {
        remainder = num % ONE_HUNDRED_THOUSAND;
        word = SINGLE_DIGIT[Math.floor(num / ONE_HUNDRED_THOUSAND)] + WORDS.HUNDRED_THOUSAND;

    } else if (num < ONE_BILLION) {
        remainder = num % ONE_MILLION;
        word = integerToWord(Math.floor(num / ONE_MILLION)) + WORDS.MILLION;

    } else if (num < ONE_TRILLION) {
        remainder = num % ONE_BILLION;
        word = integerToWord(Math.floor(num / ONE_BILLION)) + WORDS.BILLION;

    } else if (num < ONE_QUADRILLION) {
        remainder = num % ONE_TRILLION;
        word = integerToWord(Math.floor(num / ONE_TRILLION)) + WORDS.TRILLION;
    }

    if (remainder !== 0) {
        return `${word}${Separator}${integerToWord(remainder)}`;
    }

    return word;
}
