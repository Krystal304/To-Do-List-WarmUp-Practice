import { useState } from 'react';
import './App.css';

function App() {
  // state
  const [formData, setFormData] = useState(""); // Changed to an empty string
  const [toDo, setToDo] = useState([
    {
      id: 1,
      text: "Practice REACT!!!!" ,
      completed: false
    }
  ]);

  const handleChange = (e) => {
    setFormData(e.target.value); // Set formData directly to the input value
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (formData.trim() === "") return; // Avoid adding empty tasks

    const newToDo = {
      id: toDo.length + 1,
      text: formData,
      completed: false
    };

    setToDo([...toDo, newToDo]); // Add new todo to the list
    setFormData(""); // Reset input field
  };

  const handleDelete = (id) => {
    const newToDo = toDo.filter((todo) => todo.id !== id);
    setToDo(newToDo);
  };

  const toggleCompleted = (id) => {
    const updatedToDo = toDo.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setToDo(updatedToDo);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={formData} 
          onChange={handleChange} 
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDo.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => toggleCompleted(todo.id)} // Toggle completion status
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;

