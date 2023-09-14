import "./Signup.css";

const Signup = () => {
  return (
    <div className="login-form-container">
      <h2>Please Signup</h2>
      <form className="form">
        <div className="form-controll">
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-controll">
          <label htmlFor="">Password</label>
          <input type="password" name="password" />
        </div>
        <div className="form-controll">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="password" />
        </div>
        <input className="login-submit" type="submit" value="Signup" />
      </form>
    </div>
  );
};

export default Signup;
