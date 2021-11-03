import React from "react";
import "./Login.scss";

function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(password, email);
  }

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

export default Login;
