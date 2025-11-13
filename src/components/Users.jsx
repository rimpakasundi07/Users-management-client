import React, { use } from "react";

const Users = ({ UsersPromise }) => {
  const users = use(UsersPromise);
  console.log(users);
  return (
    <div>
      <div className="">
        <h3>Add a user</h3>
        <form>
          <input type="text" />
          <br></br>
          <input type="email" name="" id="" />
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
