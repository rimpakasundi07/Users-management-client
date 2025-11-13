import React, { use } from "react";

const Users = ({ UsersPromise }) => {
  const users = use(UsersPromise);
  console.log(users);
  return (
    <div>
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
