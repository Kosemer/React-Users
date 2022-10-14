import NewUsers from "./NewUsers";
import UsesrForm from "./UsersForm";
import React, {useState} from "react";

function App() {
  const [usersList, setUsersList] = useState([])

  function addUserHandler(uName, uAge){
    setUsersList((kiscica) => {
      return [...kiscica, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }
  return(
    <div>
      <UsesrForm onAddUsers = {addUserHandler}></UsesrForm>
      <NewUsers users = {usersList}></NewUsers>
    </div>
  )
}

export default App;
