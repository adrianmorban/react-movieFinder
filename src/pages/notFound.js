import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return(
        <div>
            <h3>La pagina no existe</h3>
            <Link to='/'><button>Volver</button></Link>
        </div>
    )
}