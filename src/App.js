import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
const App = () => {

  const [UserdataList, setUserDataList] = useState([]);

  const addUserHandler = (name, age) => {
    setUserDataList((prev) => {
      return [...prev,
      { name: name, age: age }
      ]
    })
  }
  return (
    <React.Fragment>
      <AddUser onAddData={addUserHandler} />
      <UserList Users={UserdataList} />
    </React.Fragment>
  );
}

export default App;
