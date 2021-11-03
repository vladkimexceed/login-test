import React from "react";
import "./Login.scss";

function LoginForm({ onLogin, isLoggedIn }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password, email);
  };

  return (
    <main className="account">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form__header">Вход</h2>
        <input
          className="form__field"
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          required
          autoComplete="off"
        />
        <input
          className="form__field"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Пароль"
          required
          autoComplete="off"
        />
        <button className="form__save-button" type="submit">
          Войти
        </button>
      </form>
    </main>
  );
}

export default LoginForm;
