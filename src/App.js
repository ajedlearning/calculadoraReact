import './App.css';
import freeCodeCampLogo from './imagenes/logo.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla'
import BotonClear from './components/BotonClear'
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {
  const [input,setInput]= useState('');

  const agregarInput = val =>{
    setInput(input + val);
  }

  const calcularResultado=()=>{
    if(input){
      try{
          setInput(evaluate(input));
      }catch(e){
          alert(e);
      }
      
    }else{
      alert('por favor ingrese valores');
    }
    
  }

  
  return (
    <div className="App">
            <div className='freecode-camp-logo-contenedor'>
              <img
                src={freeCodeCampLogo}
                className='freecodecamp-logo'
                alt='logo de freecodecamp' />
            </div>

            <div className='contenedor-calculadora'>
            <Pantalla input={input}></Pantalla>
                <div className='fila'>
                <Boton manejarClick={agregarInput}>1</Boton>
                <Boton manejarClick={agregarInput}>2</Boton>
                <Boton manejarClick={agregarInput}>3</Boton>
                <Boton manejarClick={agregarInput}>+</Boton>
                </div>
                
                <div className='fila'>
                <Boton manejarClick={agregarInput}>4</Boton>
                <Boton manejarClick={agregarInput}>5</Boton>
                <Boton manejarClick={agregarInput}>6</Boton>
                <Boton manejarClick={agregarInput}>-</Boton>
                </div>
                
               
                <div className='fila'>
                <Boton manejarClick={agregarInput}>7</Boton>
                <Boton manejarClick={agregarInput}>8</Boton>
                <Boton manejarClick={agregarInput}>9</Boton>
                <Boton manejarClick={agregarInput}>*</Boton>

                </div>
                <div className='fila'>
                <Boton manejarClick={calcularResultado}>=</Boton>
                <Boton manejarClick={agregarInput}>0</Boton>
                <Boton manejarClick={agregarInput}>.</Boton>
                <Boton manejarClick={agregarInput}>/</Boton>
                </div>
                <div className='fila'>
                  <BotonClear manejarClear={()=> setInput('')}>
                    Clear
                  </BotonClear>
                </div>
            </div>
    </div>
  );
}

export default App;
