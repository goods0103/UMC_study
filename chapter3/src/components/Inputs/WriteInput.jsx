const WriteInput = ({ text, setText }) => {
    return (
        <>
            <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
        </>

    )
}
export default WriteInput;