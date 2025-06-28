import React, { useState } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, checked: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].checked = !updated[index].checked;
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  return (
    <div className="app-container">
      <h1>📝 My Pixel Tasks</h1>

      <ul className="todo-list">
        {todos.map((todo, idx) => (
          <TodoItem
            key={idx}
            text={todo.text}
            checked={todo.checked}
            onToggle={() => toggleTodo(idx)}
            onDelete={() => deleteTodo(idx)}
          />
        ))}
      </ul>

      <div className="input-container">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={32}
          placeholder="New task..."
        />
        <button onClick={addTodo}>
          <img src="/assets/Up-arrow.png" alt="Add" width={32} height={32} />
        </button>
      </div>
    </div>
  );
}

export default App;
