import React, { use, useState } from "react";

const Users = ({ UsersPromise }) => {
  const initialUsers = use(UsersPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    const newUser = { name, email };
    // send data to the server
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post", data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        e.target.reset();
      });
  };

  return (
    <div>
      <div className="">
        <h3>Add a user</h3>
        <form onSubmit={handleAddUser}>
          <input name="name" type="text" />
          <br></br>
          <input type="email" name="email" id="" />
          <br></br>
          <button> Add user </button>
        </form>
      </div>
      <div className="">
        {users.map((user) => (
          <p>
            Name: {user.name} , Email: {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;

/**
 *
 *  Have to send request object to the server
 *  1. Maintion method : post
 *  2. Maintion header : about json data in the property of content-type : application/json
 *  3. Body : JSON.stringify(newUser)
 * ---------------------------------
 * on the server side use json as middleware
 * app.use(express.json())
 */
