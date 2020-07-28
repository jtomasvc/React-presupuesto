import React, {useState} from 'react'
import Error from './Error';
import  shortid  from 'shortid';

const Formulario = ({guardarGasto,guardarCrearGasto}) => {

    const [nombre,guardarNombre] = useState('');
    const [cantidad,guardarCantidad] = useState(0);
    const [error,guardarError] = useState(false);

    //cuando agregan un casto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN( cantidad ) || nombre.trim() ===''){
            guardarError(true);
            return; 
        }
        guardarError(false);

        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        //pasar gasto al App
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //reset el form
        guardarNombre('');
        guardarCantidad(0);
    }
    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agregar tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatoros o presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>CantidadGasto</label>
                <input
                    type="Number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value,10))}
                />
            </div>
             <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
             />
        </form>

     );
}
 
export default Formulario;