import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddUser.css";

const AddUser = (props) => {
    const [enteredname, setenteredName] = useState('');
    const [enteredage, setenteredAge] = useState('');

    const nameChangeHandler = (event) => {
        setenteredName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setenteredAge(event.target.value);
    }


    const addUserHandler = (event) => {
        event.preventDefault();
        const userDetails = {
            name: enteredname,
            age: enteredage,
        }
        if (enteredname.length === 0 || enteredage <= 0) {
            return;
        } else {

            console.log(enteredname, enteredage);
        }
        props.onAddData(enteredname, enteredage);
        setenteredName("");
        setenteredAge("");
    }

    return (
        <Card className="input">
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input type="text" id="username" value={enteredname} onChange={nameChangeHandler} />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" value={enteredage} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>

    );
}

export default AddUser;