const SINGLE_DIGIT = ['សូន្យ', 'មួយ', 'ពីរ', 'បី', 'បួន', 'ប្រាំ', 'ប្រាំមួយ', 'ប្រាំពីរ', 'ប្រាំបី', 'ប្រាំបួន'];
const DOUBLE_DIGIT = ['', 'ដប់', 'ម្ភៃ', 'សាមសិប', 'សែសិប', 'ហាសិប', 'ហុកសិប', 'ចិតសិប', 'ប៉ែតសិប', 'កៅសិប'];

const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const TEN_THOUSAND = 10_000;
const ONE_HUNDRED_THOUSAND = 100_000;
const ONE_MILLION = 1000_000;
const ONE_BILLION = 1000_000_000;
const ONE_TRILLION = 1000_000_000_000;
const ONE_QUADRILLION = 1000_000_000_000_000n;

const seperator = '-';

export function toWords(input: number | string): string {
    let word = '';
    let remainder = 0;
    const num = Number(input);

    if (num < TEN) {
        word = SINGLE_DIGIT[num];

    } else if (num < ONE_HUNDRED) {
        remainder = num % TEN;
        word = DOUBLE_DIGIT[Math.floor(num / TEN)];

    } else if (num < ONE_THOUSAND) {
        remainder = num % ONE_HUNDRED;
        word = SINGLE_DIGIT[Math.floor(num / ONE_HUNDRED)] + 'រយ';

    } else if (num < TEN_THOUSAND) {
        remainder = num % ONE_THOUSAND;
        word = SINGLE_DIGIT[Math.floor(num / ONE_THOUSAND)] + 'ពាន់';

    } else if (num < ONE_HUNDRED_THOUSAND) {
        remainder = num % TEN_THOUSAND;
        word = SINGLE_DIGIT[Math.floor(num / TEN_THOUSAND)] + 'ម៉ឺន';

    } else if (num < ONE_MILLION) {
        remainder = num % ONE_HUNDRED_THOUSAND;
        word = SINGLE_DIGIT[Math.floor(num / ONE_HUNDRED_THOUSAND)] + 'សែន';

    } else if (num < ONE_BILLION) {
        remainder = num % ONE_MILLION;
        word = toWords(Math.floor(num / ONE_MILLION)) + 'លាន';

    } else if (num < ONE_TRILLION) {
        remainder = num % ONE_BILLION;
        word = toWords(Math.floor(num / ONE_BILLION)) + 'ប៊ីលាន';

    } else if (num < ONE_QUADRILLION) {
        remainder = num % ONE_TRILLION;
        word = toWords(Math.floor(num / ONE_TRILLION)) + 'ទ្រីលាន';
    }

    if (remainder)
        return `${word}${seperator}${toWords(remainder)}`;
    return word;
}