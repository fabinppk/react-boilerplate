export const DATE_MASK = [
    /[0-9]/,
    /[0-9]/,
    '/',
    /[0-9]/,
    /[0-9]/,
    '/',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
];

export const PHONE_MASK = [
    '(',
    /[0-9]/,
    /[0-9]/,
    ')',
    ' ',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '-',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
];

export const CELLPHONE_MASK = [
    '(',
    /[0-9]/,
    /[0-9]/,
    ')',
    ' ',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '-',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
];

export const CPF_MASK = [
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '.',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '.',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '-',
    /[0-9]/,
    /[0-9]/,
];

export const CEP_MASK = [
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '-',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
];

export const CREDITCARD_MASK = [
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '-',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '-',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    '-',
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
];

export const MONTH_YEAR_MASK = [/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/];

export const dateToSend = (date) => {
    const alreadyInverted = date.split('').filter((number) => {
        return number === '-';
    });

    if (!alreadyInverted.length) {
        const convertedDate = date
            .split('')
            .filter((number) => {
                return number !== '/';
            })
            .reverse();

        return `${convertedDate[3] + convertedDate[2] + convertedDate[1] + convertedDate[0]}-${
            convertedDate[5]
        }${convertedDate[4]}-${convertedDate[7]}${convertedDate[6]}`;
    }

    return date;
};

export const dateToShow = (date) => {
    if (!date) return '';
    return date.split('-').reverse().join('');
};

export const numberOnly = (value) => {
    const reg = /\d+/g;
    if (!value) return '';
    const parseNumber = String(value).match(reg).join([]);

    return parseNumber;
};
