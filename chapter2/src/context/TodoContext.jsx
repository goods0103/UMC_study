import { createContext } from "react";
import { useState } from "react";

//데이터를 받고 있음.
export const TodoContext = createContext();

// 우산을 만듬.
export function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "제영 오소이" },
  ]);

  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [editingId, seteditingId] = useState("  ");
  const [editText, seteditText] = useState("");

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
    console.log(id);
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    seteditingId("");
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        text,
        setText,
        addTodo,
        handleSubmit,
        editingId,
        seteditingId,
        editText,
        seteditText,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
