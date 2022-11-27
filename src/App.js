import './App.css';
import freeCodeCampLogo from './imagenes/logo.png';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='logo de freecodecamp'
        />
        <div className='contenedor-calculadora'>

        </div>


      </div>
    </div>
  );
}

export default App;
