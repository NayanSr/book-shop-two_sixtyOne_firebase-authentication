import { useContext, useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const { createNewUser } = useContext(AuthContext);

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    if (password !== confirm) {
      setError("Password not matched");
      return;
    } else if (password.length < 6) {
      setError("Password must be six characters atlest");
      return;
    }
    console.log(email, password, confirm);
    setError("");

    createNewUser(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form onSubmit={handleSignupSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p style={{ marginTop: "20px" }}>
        <small style={{ color: "black", marginTop: "20px" }}>
          Already have an account?
          <Link
            style={{
              color: "tomato",
              marginLeft: "7px",
              textDecoration: "none",
            }}
            to="/login"
          >
            Login
          </Link>
        </small>
      </p>
      <h6>{error}</h6>
    </div>
  );
};

export default Signup;
