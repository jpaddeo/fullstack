import React, { useState, useEffect } from "react";

import axios from "axios";

import Filters from "./components/Filters";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const baseUri = "/api/persons";
  
  useEffect(() => {
    axios.get(baseUri).then((response) => {
      setPersons(response.data);
    });
  }, []);
  return (
    <div>
      <h2>PhoneBook</h2>
      <h3>Search</h3>
      <Filters persons={persons} setPersons={setPersons} />
      <h3>Add new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
