import React from 'react';

function Cabeceras(props) {
    return (
        <div>
        <h1>{props.TituloPrincipal}</h1>
        <h2>{props.Subtitulo}</h2>
        <h1>{props.Tercertitulo}</h1>
        </div>
    )
}
export default Cabeceras;