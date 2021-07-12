import React, { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {
  const [newPerson, setNewPerson] = useState({
    id: 0,
    name: "",
    number: "",
  });
  const handleAddPerson = (ev) => {
    ev.preventDefault();
    setNewPerson({ ...newPerson, id: persons.length + 1 });
    if (persons.filter((person) => person.name === newPerson.name).length > 0) {
      alert(`${newPerson.name} is already added to phonebook`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewPerson({
        id: 0,
        name: "",
        number: "",
      });
    }
  };
  return (
    <form>
      <div>
        name:{" "}
        <input
          value={newPerson.name}
          onChange={(ev) => {
            setNewPerson({ ...newPerson, name: ev.target.value });
          }}
        />
        number:{" "}
        <input
          value={newPerson.number}
          onChange={(ev) => {
            setNewPerson({ ...newPerson, number: ev.target.value });
          }}
        />
      </div>
      <div>
        <button type="submit" onClick={handleAddPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
