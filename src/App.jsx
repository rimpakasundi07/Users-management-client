import "./App.css";
import Users from "./components/Users";

const UsersPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <h2>Users Management</h2>
      <Users UsersPromise={UsersPromise}></Users>
    </>
  );
}

export default App;
