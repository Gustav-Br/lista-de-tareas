import logo from './logo.svg';
import './App.css';
import ListaDeTareas from './components/ListaDeTareas';


function App() {
  return (
    <div className='App'>
      <div className='contenedor-logo'>
        <img
          src={logo}
          className='logo-tareas' />
      </div>
      <div className='lista-principal-tareas'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
