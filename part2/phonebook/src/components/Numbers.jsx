const Numbers = ({ persons, filter, deleteItemOf }) => {
  return persons
    .filter(
      (person) =>
        filter === "" ||
        person.name.toLowerCase().includes(filter.toLowerCase())
    )
    .map((person) => (
      <div key={person.id}>
        {person.name} {person.number}{" "}
        <button onClick={() => deleteItemOf(person.id)}>delete</button>
      </div>
    ));
};

export default Numbers;
