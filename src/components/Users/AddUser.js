import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {
    const [enteredname, setenteredName] = useState('');
    const [enteredage, setenteredAge] = useState('');
    const [error, setError] = useState(false);

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

        if (enteredname.trim().length === 0 || enteredage.trim().length === 0) {
          setError({
            titel:"Invalid Input",
            massage: "Please enter a valid username and age (non-empty values).",
          })
          return;
        }
        if(+enteredage<1){

            setError({
                title:"Invalid Input",
                massage: "Please enter a valid age (> 0)."
            });
            return;
        }
            console.log(enteredname, enteredage);
        

        props.onAddData(enteredname, enteredage);
        setenteredName("");
        setenteredAge("");
    }

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <div>
            {error && (
                <ErrorModal title={error.title} massage={error.massage} onConfirm = {errorHandler}/>
            )}
            <Card className="input">
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" value={enteredname} onChange={nameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={enteredage} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

    );
}

export default AddUser;