import { OPERATOR, MAX_NUM_LENGTH, ERROR } from './constant';

export const calculateResult = (No1, No2, operator) => {
    const firstNumber = No1 ? Number(No1) : 0;
    let secondNumber = No2 ? Number(No2) : firstNumber;
    if(!operator) return No1 || 0;
    if(operator === OPERATOR.DEV && secondNumber === 0) return ERROR;
    
    switch (operator) {
        case OPERATOR.ADD:
            return formatResult(firstNumber + secondNumber);
        case OPERATOR.SUB:
            return formatResult(firstNumber - secondNumber);
        case OPERATOR.MUL:
            return formatResult(firstNumber * secondNumber);
        case OPERATOR.DEV:
            return formatResult(firstNumber / secondNumber);
        default:
            return ERROR;
    }
}

const formatResult = result => {
    const resStr = result.toString().replace('-', '');
    const dotIndex = resStr.indexOf('.');
    const negativeChar = result.toString().indexOf('-') !== -1 ? '-' : '';
    
    if(dotIndex === -1) {
        return resStr.length > MAX_NUM_LENGTH ? `${negativeChar}${resStr.substr(resStr.length - MAX_NUM_LENGTH)}` : `${negativeChar}${resStr}`;
    } 
    
    const [integer, decimal] = resStr.split('.');

    if(integer.length >= MAX_NUM_LENGTH){
        return `${negativeChar}${integer.substr(integer.length - MAX_NUM_LENGTH)}`;
    } else {
        const maxDecimalLength = MAX_NUM_LENGTH - integer.length;
        return decimal.length > maxDecimalLength ? `${negativeChar}${result.toFixed(maxDecimalLength - 1)}` : `${negativeChar}${resStr}` ;
    }
}

export const convertToPercentage = number => formatResult(Number(number)/100);
