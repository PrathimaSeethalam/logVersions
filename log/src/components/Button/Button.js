/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */
import React from 'react';
import './Button.css';

export default function CustomizedButton({ children, ...props }) {
    return (
        <button type='button' className={props.className} {...props}>
            {props.buttonname}
        </button>
    );
}
