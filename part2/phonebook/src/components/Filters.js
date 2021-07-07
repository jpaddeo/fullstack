import React, { useState } from "react";

const Filters = ({ persons, setPersons }) => {
  const [query, setQuery] = useState("");
  return (
    <div>
      search:
      <input
        value={query}
        onChange={(ev) => {
          setQuery(ev.target.value);
          setPersons(
            persons.filter((person) => person.name.includes(ev.target.value))
          );
        }}
      />
    </div>
  );
};

export default Filters;
