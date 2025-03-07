import { Button } from 'react-bootstrap';
// 버튼 컴포넌트
const DeleteButton = (props) => {
  return(
    <button onClick={() => props.deleteTodo(props.id)}>삭제하기</button>
  )
}
export default DeleteButton;