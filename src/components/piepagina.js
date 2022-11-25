import React from 'react';

function PiePagina(props) {
    return (
        <div>
        <p>{props.email}</p>
        <p>{props.ciudad}</p>
        <p>{props.direccion}</p>
        </div>
        
    )
}
export default PiePagina;