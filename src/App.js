import LoginForm from "./components/LoginForm";
import "./App.css";
import { authorize } from "./utils/Auth";
import React from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleAuth = React.useCallback(async (password, email) => {
    try {
      const res = await authorize(password, email);
      alert(res);
      setIsLoggedIn(true);
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <div className="page">
      <LoginForm onLogin={handleAuth} isLoggedIn={isLoggedIn} />;
    </div>
  );
}

export default App;
