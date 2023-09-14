import "./Login.css";

const Login = () => {
  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form className="form">
        <div className="form-controll">
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-controll">
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
        </div>
        <input className="login-submit" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
