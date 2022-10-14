import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import "./UsersForm.css";
import Button from "./Button";

function UsesrForm(props) {
  const [eneteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();


  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    if(eneteredName.trim().length === 0 || enteredAge.trim().length === 0){
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if(+enteredAge < 1){
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUsers(eneteredName, enteredAge);

    setEnteredName("");
    setEnteredAge("");
  }

  function errorHandler(){
    setError(null)
  }

  return (
    <div>
    {error && <ErrorModal
      title = {error.title}
      message = {error.message} 
      onComfirm = {errorHandler}></ErrorModal>}
    <form className="form" onSubmit={submitHandler}>
      <div className="users_form">
        <div className="new-users__controls">
          <label className="users_label">Username:</label>
          <input
            className="new-users__control_input"
            value={eneteredName}
            onChange={nameChangeHandler}
            type="text"
            placeholder="Type your name"
          ></input>
        </div>
        <div className="new-users__controls">
          <label className="users_label">Age(Years):</label>
          <input
            className="new-users__control_input"
            value={enteredAge}
            onChange={ageChangeHandler}
            type="number"
            min="1"
            step="1"
            placeholder="Add your age"
          ></input>
        </div>

        <Button
          className="new-users__button"
          onClick={submitHandler}
          type="button"
        >
          Add User
        </Button>
      </div>
    </form>
    </div>
  );
}

export default UsesrForm;
