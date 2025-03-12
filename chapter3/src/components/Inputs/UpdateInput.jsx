const UpdateInput = ({task, seteditText}) => {
    return (
        <input
            defaultValue={task}
            onChange={(e) => {
                seteditText(e.target.value);
                // console.log(e);
            }}
        ></input>
    )
}
export default UpdateInput;