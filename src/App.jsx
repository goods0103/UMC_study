import './App.css'
import { useState } from 'react';
import DeleteButton from './components/Buttons/DeleteButton.jsx';
import UpdateButton from './components/Buttons/UpdateButton.jsx';
import WriteInput from './components/Inputs/WriteInput.jsx';
import UpdateInput from './components/Inputs/UpdateInput.jsx';
import Movies from './components/Movies.jsx';
function App() {

  //컴포넌트 분리하기

  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' }, { id: 2, task: '제영 오소이' }
  ]);

  const [text, setText] = useState('');

  const [editingId, seteditingId] = useState('');
  const [editText, seteditText] = useState('');

  console.log(text);
  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const addTodo = () => {
    setTodos((prev) => [...prev, { id: Math.floor(Math.random() * 100) + 2, task: text }]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
    console.log(id);
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => item.id === id ? { ...item, task: text } : item)
    );
    seteditingId('');
  }
  return (
    <>
      <Movies></Movies>
      <form className='formCss' onSubmit={handleSubmit}>
        <WriteInput text={text} setText={setText} ></WriteInput>
        <button onClick={() => addTodo()} type='submit'>할일 등록</button>
      </form>
      <div>
        {todos.map(({ id, task }, _) =>
          <div key={id} style={{ display: 'flex', gap: '20px' }}>
            {editingId !== id && (
              <div style={{ display: 'flex', gap: '5px' }} key={id}>
                <p>{id}.</p>
                <p>{task}</p>
              </div>
            )
            }
            {editingId === id && (
              <div style={{ display: 'flex', gap: '5px' }} key={id}>
                <p>{id}.</p>
                <UpdateInput task={task} seteditText={seteditText}></UpdateInput>
              </div>
            )
            }
            <DeleteButton deleteTodo={deleteTodo} id={id}></DeleteButton>
            <UpdateButton editingId={editingId} id={id} seteditingId={seteditingId} updateTodo={updateTodo} editText={editText}></UpdateButton>
          </div>
        )}
      </div>
    </>
  )
}

export default App
