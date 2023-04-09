import React, { useContext, useState } from "react";
import "../register/register.css";
import FormInput from "../../components/formInput/FormInput";
import { FaFacebook } from "react-icons/fa";
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


  const navigate = useNavigate();
  // inputs

const inputs = [
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
  {
    id: 3,
    name: "password",
    type: "text",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character",
    pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
    required: true,
  },
  {
    id: 4,
    name: "confirmPassword",
    type: "text",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match",
    pattern: inputValues.password,
    required: true,
  },
];

  // handle change
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  console.log(inputValues)

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
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={inputValues[input.name]}
            onChange={handleChange}
          />
        ))}

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
