import Login from "./components/Login";
import "./App.css";
import { authorize } from "./utils/Auth";
import React from "react";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  async function handleAuthorize(password, email) {
    try {
      let res = await authorize(password, email);
      alert(res);
      setLoggedIn(true);
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div className="page">
      <Login onLogin={handleAuthorize} loggedIn={loggedIn} />;
    </div>
  );
}

export default App;
