import React,{Fragment,useState,useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Presupuesto from './components/ControlPresupuesto';

function App() {

  //Definir el State para almacenar el presupuesto
  const [presupuesto,guardarPresupuesto] = useState(0); 
  const [restante,guardarRestante] = useState(0); 
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos,guardarGastos] = useState ([]);
  const [gasto,guardarGasto] = useState({});
  const [creargasto,guardarCrearGasto] = useState(false);

  //UseEffect que actualiza el restante
  useEffect (() => {
    if(creargasto){
      //Agrega el nuevo prespuesto
      guardarGastos([
        ...gastos,
        gasto
      ]);
      
      //Resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante)

      //Resetear a false
      guardarCrearGasto(false);
    }
  },[gasto,creargasto,gastos,restante]);


  return (
      <Fragment>
        <div className="container">
          <header>
            <h1>Gasto semanal</h1>
          </header>
        </div>

        <div className="contenido-principal contenido">
          {mostrarPregunta ? (<Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante} 
            actualizarPregunta={actualizarPregunta}
          />) : ( 
            <div className="row">
              <div className="one-half column">
                <Formulario
                    guardarGasto={guardarGasto}
                    guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                    gastos={gastos}
                />

                <Presupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>

          ) }


        </div>


      </Fragment>
  );
}

export default App;
