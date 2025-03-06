import './App.css'
import { useState } from 'react';
function App() {
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

  //수정하기 구현 생각
  // 1. 먼저 버튼을 클릭했을 때 id를 가져온다
  // 2. Todd 배열을 돌며 일치하는 id를 찾는다
  // 3. id가 일치할 시에 다른값들은 건들이지말고 해당 id값의 task값을 수정한다
  // 4. 어떻게? 삼항 연산자를 써서 같을시에 item.task == 수정값으로  
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => item.id === id ? {...item, task : text} : item)
    );
    seteditingId('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
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
                <input 
                  defaultValue={task}
                  onChange={(e) => seteditText(e.target.value)}
                ></input>
              </div>
            )
            }
            <button onClick={() => deleteTodo(id)}>삭제하기</button>
            {editingId === id ? (
              <button onClick={(e) => updateTodo(editingId, editText)}>수정 중</button>
            ) : (
              <button onClick={() => seteditingId(id)}>수정 진행</button>)}
          </div>
        )}
      </div>
    </>
  )
}

export default App
