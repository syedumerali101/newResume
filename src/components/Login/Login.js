import { Button, Divider, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import PATHS from "../../router/paths";
import "./login.scss";

import Loader from "../Loader/loader";
import Message from "../Message/message";
import { login } from "../../redux/actions/userLoginAction";

const Login = ({ location }) => {
  const history = useHistory();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
const [loginn,setLoginn]=useState(
  {
    email:"",
    password:""
  }
);
const {email,password}=loginn;
const Handler = e => {
  setLoginn({...loginn, [e.target.name]: e.target.value})
}

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { loading, error, userInfo } = userLogin;

  // const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(`/${PATHS.DASHBOARD}`);
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login__container">
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form className="login__container__form">
        <div className="login__container__title title--md">
          Sign in to Skilledger
        </div>
        <p className="login__container__desc">
          Enter your login to access Skilledger's fun!
        </p>

        <TextField
          className="login__container__form__field"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          onChange={Handler}
        />
        <TextField
          className="login__container__form__field"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={Handler}
        />
        <div onClick={(e) => submitHandler(e)} className="btn--primary">
          Log In
        </div>
        <span style={{ margin: "20px 0" }}>Or</span>
        <p className="login__container__form__signUp">
          <Link
            to={`/${PATHS.REGISTER}`}
            className="login__container__form__signUp__link"
          >
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
