const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const fullstackMorganMid = (tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
    JSON.stringify(req.body || []),
  ].join(" ");
};
app.use(morgan(fullstackMorganMid));


let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "+5491123232323",
    },
    {
      id: 2,
      name: "Pepito Sibrian",
      number: "+549119090900",
    },
    {
      id: 3,
      name: "Edgar Allan Poe",
      number: "+549118989767",
    },
  ];

  
const nextId = (collection) => {
  const maxId =
    collection.length > 0 ? Math.max(...collection.map((elem) => elem.id)) : 0;
  return maxId + 1;
};

app.get("/api", (request, response) => {
  response.json({ status: true });
});
app.get("/info", (request, response) => {
  const info = `<p>Phonebook has info for ${
    persons.length
  } people</p><p>${new Date().toString()}</p>`;
  response.send(info);
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});
app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});
app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});
app.post("/api/persons", (request, response) => {
  const body = request.body;
  if (!body) {
    return response
      .status(400)
      .json({ status: false, error: "Must be include data" });
  }
  if (!body.name || !body.number) {
    return response
      .status(400)
      .json({ status: false, error: "Name or Number missing" });
  }
  const personDb = persons.find(
    (person) =>
      person.number === Number(body.number) || person.name === body.name
  );
  if (personDb) {
    return response.status(400).json({
      status: false,
      error: "Already exists the Name or Number in db",
    });
  }
  const person = {
    id: nextId(persons),
    name: body.name,
    number: body.number,
  };
  persons = persons.concat(person);
  response.json(person);
});
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
