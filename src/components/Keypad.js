import React from 'react';
import Button from './Button'
import { KEYS } from '../utils/constant';

const Keypad = ({onChange}) => {
    return (
        <div className="keys-container">
            {KEYS.map(k => {
                return <Button key={k.label} keyObj={k} onClick={onChange}/>
            })}
        </div>
    )
}

export default Keypad;