import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Hello = (props) => {
  const now = new Date()
  return (
    <div>
      <p>Hola {props.name}! Son las {now.toString()}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Saludos</h1>
      <Hello name="Juan" />
      <Hello name="Pepe" />
      <Hello name="José" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))