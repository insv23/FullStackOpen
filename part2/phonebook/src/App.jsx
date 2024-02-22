import { useState, useEffect } from "react";

import numberService from "./services/number";

import Add from "./components/Add";
import Notification from "./components/Notification";
import Numbers from "./components/Numbers";
import Search from "./components/Search";

const App = () => {
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState("something happened...");
  const [messageType, setMessageType] = useState("info");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [persons, setPersons] = useState([]);

  const hook = () => {
    numberService.getAll().then((initialNumbers) => {
      setPersons(initialNumbers);
    });
  };

  useEffect(hook, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const hanldeNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();

    const personExists = persons.find((person) => person.name === newName);

    if (personExists) {
      if (
        window.confirm(
          `${personExists.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...personExists, number: newNumber };
        numberService
          .update(personExists.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((p) =>
                p.id !== returnedPerson.id ? p : returnedPerson
              )
            );
          });
        setMessageType("info");
        setMessage(`Updated ${updatedPerson.name}`);
      }
      return;
    }

    const personbject = {
      name: newName,
      number: newNumber,
    };

    numberService.create(personbject).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
      setMessageType("info");
      setMessage(`Added ${returnedPerson.name}`);
    });
  };

  const deleteItemOf = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person ? person.name : "this item"}?`)) {
      numberService
        .deleteItem(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id));
        })
        .catch((error) => {
          setMessageType("error");
          setMessage(
            `Information of ${person.name} has already been removed from server`
          );
          setTimeout(() => {
            setMessageType("info");
            setMessage("Everything is OK so far");
          }, 5000);
          setPersons(persons.filter((p) => p.id !== person.id));
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType} />
      <Search handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <Add
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
        hanldeNameChange={hanldeNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Numbers persons={persons} filter={filter} deleteItemOf={deleteItemOf} />
    </div>
  );
};

export default App;
