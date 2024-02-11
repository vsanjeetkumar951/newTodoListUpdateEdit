import React, { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState("");
  const [editedTodo, setEditedTodo] = useState([]);
  const [editedData, setEditedData] = useState("");
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // Add the Items
  const addItem = () => {
    if (!newData) {
    } else {
      setData([...data, newData]);
      setNewData("");
    }
  };

  // Delete the Items
  const deteteData = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  // Update the items
  const handleUpdateTodo = () => {
    const update_todos = [...data];
    update_todos[editedTodo] = editedData;
    setData(update_todos);
    setEditedTodo(null);
    setEditedData("");
  };

  // Edit the Items
  const handleEditTodo = (index, text) => {
    setEditedTodo(index);
    setEditedData(text);
  };
  return (
    <div className="border">
      <div className="border1">
        <div>
          <input
            className="input"
            type="text"
            value={newData}
            onChange={(e) => setNewData(e.target.value)}
            placeholder="Enter The value"
          />
          <button onClick={addItem} className="btn">
            Add
          </button>
        </div>
        <ul>
          {data.map((item, index) => {
            return (
              <li key={index} className="ullist">
                {editedTodo === index ? (
                  <>
                    <input
                      className="ullistinp"
                      type="text"
                      value={editedData}
                      onChange={(e) => setEditedData(e.target.value)}
                    />

                    <div className="check">
                      <input
                        className="checkbox1"
                        type="checkbox"
                        value={data}
                        onClick={handleUpdateTodo}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    {item}
                    <input
                      type="checkbox"
                      value={data}
                      onClick={() => handleEditTodo(index, item)}
                      className="checkbox2"
                    />
                  </>
                )}

                <button
                  className="btn2"
                  onClick={() => {
                    deteteData(index);
                  }}
                >
                  DeleteData
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
