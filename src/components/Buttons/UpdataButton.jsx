const UpdateButton = ({editingId, id, seteditingId, updateTodo, editText}) => {
    console.log(id);
    console.log(editingId);
    return (
        <>
            {
                editingId === id ? (
                    <button onClick={() => updateTodo(editingId, editText)}>수정 중</button>
                ) : (
                    <button onClick={() => seteditingId(id)}>수정 진행</button>)
            }
        </>
    )

}
export default UpdateButton;