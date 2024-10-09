
const AddUser = () => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
        <form onSubmit={addUserHandler}>
            <div>
                <label htmlFor="username">UserName</label>
                <input type="text" id="username" />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="number" id="age" />
            </div>
            <div>
                <button type="submit">Add User</button>
            </div>
        </form>
    );
}

export default AddUser;