import React from 'react'
import Gastos from './Gasto';


const Listado = ({gastos}) => (
    <div className="gastos-realizados">
        <h2>Gastos Realizados</h2>
        {gastos.map(gasto=>(
            <Gastos
                key={gasto.id}
                gasto={gasto}
            />
        ))}
    </div>
);
export default Listado;