import React from "react";

const Total = ({ parts }) => {
  return (
    <p>
      <strong>
        Number of exercises{" "}
        {parts
          .map(function (part) {
            return part.exercises;
          })
          .reduce((accumulator, excercise) => accumulator + excercise)}
      </strong>
    </p>
  );
};

export default Total;
