/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import React, { useRef } from 'react';

export default function SearchBar(props) {
    const filterTextInput = useRef(null);

    function handleChange() {
        console.log('in handlechange');
        props.onUserInput(filterTextInput.current.value);
    }
    return (
        <div>
            <input
                style={{ width: '30%' }}
                type='text'
                placeholder='Search by Version name...'
                value={props.filterText}
                ref={filterTextInput}
                onChange={handleChange}
            />
        </div>
    );
}
