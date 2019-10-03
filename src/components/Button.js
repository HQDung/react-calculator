import React from 'react';
import { BTN_TYPE } from '../utils/constant';

export default ({keyObj, onClick}) => (
    <div className={`button ${keyObj.type !== BTN_TYPE.NUMBER && 'function-btn' }`} onClick={() => onClick(keyObj)}>{keyObj.label}</div>
)