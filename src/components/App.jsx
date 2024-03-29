import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [item, setItem] = useState([]);

  function handleChange(e) {
    const inputText = e.target.value;
    setInputText(inputText);
  }
  function btnClick() {
    setItem((prevItem) => {
      return [...prevItem, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={btnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((listNewItems) => {
            return <li>{listNewItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
