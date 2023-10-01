import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Bissi.css";

function Bissi() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [randomName, setRandomName] = useState("");
  const [playClick, setPlayClick] = useState(false);

  const handleAdd = () => {
    if (name === "" || !name.trim()) {
      alert("Name cannot be blank");
      setName("");
      return;
    }

    const exists = list.find(
      (n) =>
        n.name.trim().toLocaleLowerCase() === name.trim().toLocaleLowerCase()
    );
    if (exists) {
      alert("Name is already present");
      setName("");
      return;
    }

    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName("");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handlePlay = () => {
    if (list.length < 2) {
      alert("At least 2 names are required");
      return;
    }
    setPlayClick(true);
    var randomIndex = Math.floor(Math.random() * list.length);
    setRandomName(list[randomIndex].name);
  };

  const handleRemove = (index) => {
    const getName = list[index].name;
    console.info(getName);
    const newList = list.filter((l) => l.name !== getName);
    setList(newList);
  };

  return (
    <div className="bissi">
      <button onClick={handleAdd}>Add</button>
      &nbsp;
      <input type="text" value={name} onChange={handleChange}></input>
      {list.map((item, index) => (
        <p key={item.id}>
          {item.name}
          &nbsp;
          <button onClick={() => handleRemove(index)}>-</button>
        </p>
      ))}
      <p>
        <button onClick={handlePlay}>Play</button>
      </p>
      {playClick ? <p>{randomName} won Hurray!!!</p> : null}
    </div>
  );
}

export default Bissi;
