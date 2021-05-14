import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
}

const Content = (props) => {
  let partsFprmatted = props.parts.map(part => {
    return <Part name={part.name} exercises={part.exercises} />;
  })
  return (
    <div>
      {partsFprmatted}
    </div>
  );
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  );
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.map(function (part) { return part.exercises; }).reduce((accumulator, excercise) => accumulator + excercise)}</p>
  );
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 },
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
