import { registerUser, loginUser } from "../../redux/users/usersOperation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "../AuthForm/AuthForm.css"

export const AuthForm = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.userName.value.trim();
    const email = form.elements.emailReg.value.trim();
    const password = form.elements.passwordReg.value.trim();

    try {
      await dispatch(registerUser({ name, email, password })).unwrap();
      setRegisterError("");
      form.reset();
    } catch {
      setRegisterError("This email is already registered");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    try {
      await dispatch(loginUser({ email, password })).unwrap();
      setLoginError("");
      form.reset();
    } catch {
      setLoginError("Incorrect email or password");
    }
  };

  return (
    <div className={`auth-wrapper ${isRegister ? "toggled" : ""}`}>
      <div className="background-shape"></div>
      <div className="secondary-shape"></div>

      <div className="credentials-panel signin">
        <h2 className="slide-element">Login</h2>
        {loginError && (
          <p className="errorMessage">{loginError}</p>
        )}

        <form onSubmit={handleLogin}>
          <div className="field-wrapper slide-element">
            <input name="email" type="email" placeholder=" " required />
            <label>Email</label>
            <i className="fa-solid fa-envelope"></i>
          </div>

          <div className="field-wrapper slide-element">
            <input name="password" type="password" placeholder=" " required />
            <label>Password</label>
            <i className="fa-solid fa-lock"></i>
          </div>

          <div className="field-wrapper slide-element">
            <button className="submit-button" type="submit">
              Login
            </button>
          </div>

          <div className="switch-link slide-element">
            <p>
              Don't have an account?
              <br />
              <button
                type="button"
                className="register-trigger"
                onClick={() => {
                  setIsRegister(true);
                  setLoginError("");
                  setRegisterError("");
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>

      <div className="welcome-section signin">
        <h2 className="slide-element">WELCOME BACK!</h2>
      </div>

      <div className="credentials-panel signup">
        <h2 className="slide-element">Register</h2>
        {registerError && (
          <p className="errorMessage">{registerError}</p>
        )}

        <form onSubmit={handleRegister}>
          <div className="field-wrapper slide-element">
            <input name="userName" type="text" placeholder=" " required />
            <label>Username</label>
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="field-wrapper slide-element">
            <input name="emailReg" type="email" placeholder=" " required />
            <label>Email</label>
            <i className="fa-solid fa-envelope"></i>
          </div>

          <div className="field-wrapper slide-element">
            <input name="passwordReg" type="password" placeholder=" " required />
            <label>Password</label>
            <i className="fa-solid fa-lock"></i>
          </div>

          <div className="field-wrapper slide-element">
            <button className="submit-button" type="submit">
              Register
            </button>
          </div>

          <div className="switch-link slide-element">
            <p>
              Already have an account?
              <br />
              <button
                type="button"
                className="login-trigger"
                onClick={() => {
                  setIsRegister(false);
                  setLoginError("");
                  setRegisterError("");
                }}
              >
                Sign In
              </button>
            </p>
          </div>
        </form>
      </div>

      <div className="welcome-section signup">
        <h2 className="slide-element">WELCOME!</h2>
      </div>
    </div>
  );
};
