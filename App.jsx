import  { useState } from 'react';
import styles  from './App.module.css'
const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

 

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.todoText.value;
    if (text.trim()) {
      addTodo(text);
      e.target.elements.todoText.value = '';
    }
    
  };
  const handleClear = (event) => {
    setTodos([]);
event.preventDefault();
  };

  const setTodoss = JSON.stringify(todos);
    localStorage.setItem("todo:", setTodoss);



  return (
    <div className={styles.flexBox}>
      <h1 className={styles.title}>Todo App</h1>
      <form  onSubmit={handleSubmit}>
        <input placeholder='Add your new todo' type="text" name="todoText" />
        <button className={styles.buton1} type="submit">+</button>
      </form>
      <ul className={styles.ul}>
        {todos.map((todo, index) => (
          <li className={styles.li} key={index} >
            {todo.text}
            
            <button className={styles.deletBtn} onClick={() => deleteTodo(index)}><img src="./img/korzinka.svg" alt="" /></button>
          </li>
          
        ))}
      </ul>
      <form><button onClick={handleClear} className={styles.clear}>Clear All</button></form>
    </div>
  );
};

export default App;