import React, { useState, useEffect } from 'react';
import Keypad from './components/Keypad';
import Screen from './components/Screen';
import { INIT_STATE, BTN_TYPE, MAX_NUM_LENGTH } from './utils/constant';
import { calculateResult, convertToPercentage } from './utils/helper';

import './App.scss';

function App() {
  const [state, setState] = useState(INIT_STATE);

  useEffect(() => {
    document.addEventListener("keyup", onKeyPress, false)
    return () => document.removeEventListener("keyup", onKeyPress, false)
  })

  function onKeyPress(e) {
    const keyCode = e.keyCode;

    if (((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || keyCode === 110) && !e.shiftKey) {
      onBtnClick({label: `${e.key}`, type: BTN_TYPE.NUMBER})
    } else if (keyCode === 107 || (keyCode === 187 && e.shiftKey)) {
      onBtnClick({label: `+`, type: BTN_TYPE.BTN_ADD})
    } else if (keyCode === 109 || (keyCode === 189 && !e.shiftKey)) {
      onBtnClick({label: `-`, type: BTN_TYPE.BTN_SUB})
    } else if (keyCode === 106 || (keyCode === 56 && e.shiftKey)) {
      onBtnClick({label: `x`, type: BTN_TYPE.BTN_MUL})
    } else if (keyCode === 111 || (keyCode === 191 && !e.shiftKey)) {
      onBtnClick({label: `/`, type: BTN_TYPE.BTN_DEV})
    } else if (keyCode === 13) {
      onBtnClick({label: `=`, type: BTN_TYPE.RESULT})
    }
  }

  function onBtnClick(key) {
    const type = key.type;
    const { firstNumber, secondNumber, operator, result: res } = state;
    switch (type) {
      case BTN_TYPE.NUMBER:
        const number = key.label;
        const newNumber = operator ? `${secondNumber}${number}` :  `${firstNumber}${number}`;
        if(newNumber.length > MAX_NUM_LENGTH) return;
        setState({
          ...state,
          result: newNumber,
          ...operator ? {secondNumber: newNumber} : {firstNumber: newNumber}
        });
        break;
      case BTN_TYPE.DECIMAL:
          if(res.indexOf('.')!== -1) return;
          setState({
            ...state, 
            result: `${res}.`,
            ...operator ? {secondNumber: `${res}.`} : {firstNumber: `${res}.`}
          });
        break;
      case BTN_TYPE.BTN_ADD:
      case BTN_TYPE.BTN_SUB:
      case BTN_TYPE.BTN_MUL:
      case BTN_TYPE.BTN_DEV:
          if(secondNumber) {
            const result = calculateResult(firstNumber, secondNumber, operator);
            setState({...state, result, firstNumber: `${result}`, secondNumber: '', operator: key.label });
          } else {
            setState({...state, operator: key.label, firstNumber: res});
          }
        break;
      case BTN_TYPE.CLEAR:
          setState({...INIT_STATE})
        break;
      case BTN_TYPE.RESULT:
          if(!operator) return;
          const result = calculateResult(firstNumber, secondNumber, operator);
          setState({...INIT_STATE, result})
        break;
      case BTN_TYPE.PERCENTAGE_TRANSFORM:
          const updatedNumber = convertToPercentage(operator ? secondNumber : firstNumber);
          setState({...state, result: updatedNumber, ...operator ? {secondNumber: updatedNumber} : {firstNumber: updatedNumber}});
        break;
      default:
        break;
    }
  }

  return (
    <React.Fragment>
      <Screen result={state.result} />
      <Keypad onChange={onBtnClick}/>
    </React.Fragment>
  );
}

export default App;
