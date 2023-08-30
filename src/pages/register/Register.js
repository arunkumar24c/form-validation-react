import React, { useContext, useState } from "react";
import "../register/register.css";
import FormInput from "../../components/formInput/FormInput";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputType, setInputType] = useState("password");
  const [toggleEye, setToggleEye] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };
  const handleChanges = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();
  // inputs

  const inputes = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
    },
  ];

  // handle change
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  console.log(inputValues);

  // handle register

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValues.username,
        });
        navigate("/login");
      });
    } catch (error) {}
  };
  // sign in
  const signInWithGoogle = () => {
    dispatch({ type: "LOGIN_START" });

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
        navigate("/");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };

  return (
    <div className="register">
      <form>
        {inputes.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={inputValues[input.name]}
            onChange={handleChange}
          />
        ))}
        <div className="formInput">
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChanges}
            required
          />
          <div className="eyeIcon" onClick={handleToggle}>
            {toggleEye ? <AiFillEye /> : <AiFillEyeInvisible />}
          </div>
        </div>
        <div className="formInput">
          <input
            type="text"
            placeholder=" confirm Password"
            onPaste={(e) => {
              e.preventDefault();
              alert("donot copy the password");
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
          />
        </div>

        <button type="submit" onClick={handleRegister}>
          Register
        </button>
        {/* sign in */}
        <div className="formLink">
          <span>Already have an account? </span>
          <Link
            to="/login"
            className="formSignup"
            style={{ textDecoration: "none" }}
          >
            {" "}
            SignIn
          </Link>
        </div>
        {/* facebook login */}
        <div className="line"></div>

        <div className="media-options">
          <Link
            to="#"
            className="facebook google"
            style={{ textDecoration: "none" }}
            onClick={signInWithGoogle}
          >
            <img
              src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
              alt=""
              className="googleImg"
            />
            <span>Login with Google</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
