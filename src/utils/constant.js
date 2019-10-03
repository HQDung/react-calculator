export const MAX_NUM_LENGTH = 9;
export const ERROR = 'ERROR';

export const OPERATOR = {
    ADD: '+',
    SUB: '-',
    MUL: 'x',
    DEV: '/'
}

export const BTN_TYPE = {
    NUMBER: 'number',
    BTN_ADD: OPERATOR.ADD,
    BTN_SUB: OPERATOR.SUB,
    BTN_MUL: OPERATOR.MUL,
    BTN_DEV: OPERATOR.DEV,
    DECIMAL: '.',
    RESULT: '=',
    CLEAR: 'C',
    PERCENTAGE_TRANSFORM: '%'
  }

export const KEYS = [
    {label: 'C', type: BTN_TYPE.CLEAR},
    {label: '%', type: BTN_TYPE.PERCENTAGE_TRANSFORM},
    {label: '/', type: BTN_TYPE.BTN_DEV},
    {label: 7, type: BTN_TYPE.NUMBER},
    {label: 8, type: BTN_TYPE.NUMBER},
    {label: 9, type: BTN_TYPE.NUMBER},
    {label: 'x', type: BTN_TYPE.BTN_MUL},
    {label: 4, type: BTN_TYPE.NUMBER},
    {label: 5, type: BTN_TYPE.NUMBER},
    {label: 6, type: BTN_TYPE.NUMBER},
    {label: '-', type: BTN_TYPE.BTN_SUB},
    {label: 1, type: BTN_TYPE.NUMBER},
    {label: 2, type: BTN_TYPE.NUMBER},
    {label: 3, type: BTN_TYPE.NUMBER},
    {label: '+', type: BTN_TYPE.BTN_ADD},
    {label: 0, type: BTN_TYPE.NUMBER},
    {label: '.', type: BTN_TYPE.DECIMAL},
    {label: '=', type: BTN_TYPE.RESULT},
];

export const INIT_STATE = {
    firstNumber: '',
    secondNumber: '',
    result: '0',
    operator: '',
};

