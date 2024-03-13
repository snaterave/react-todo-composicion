import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

/*function App(props){
  return(
    <h1>{props.saludo}, {props.nombre}</h1>
  )
}*/

// HOC
/*function withWhatEver(WrappedComponent){
  return function ComponenteDeVerdad(props){
    return(
      <>
        <WrappedComponent {...props} />
        <p>Con el WrappedComponent</p>
      </>
    )
  }
}*/

// Guarda la funcion ComponenteDeVerdad
//const AppWithWhatEver = withWhatEver(App)


ReactDOM.render(
  //<AppWithWhatEver saludo="Buenas" nombre="Silma"/>,
  <App />,
  document.getElementById('root')
);
