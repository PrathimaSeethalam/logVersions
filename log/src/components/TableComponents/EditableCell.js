/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import React from 'react';

export default function EditableCell(props) {
    return (
        <td>
            {props.isEdit ? (
                <input
                    type='text'
                    name={props.cellData.type}
                    id={props.cellData.id}
                    value={props.cellData.value}
                    onChange={props.onProductTableUpdate}
                />
            ) : (
                props.cellData.value
            )}
        </td>
    );
}
