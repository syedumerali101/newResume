import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./register.scss";
import PATHS from "../../router/paths";

import { register } from "../../redux/actions/userLoginAction";
import Loader from "../Loader/loader";
import Message from "../Message/message";
import { FaAddressBook } from "react-icons/fa";

const Register = (props) => {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(`/${PATHS.DASHBOARD}`);
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      register(
        username,
        email,
        password,
        first_name,
        last_name,
        phone,
        address,
      ),
    );
  };

  return (
    <div className="register">
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <form className="register__form">
        <div className="register__title title--md">Welcome to Skilledger</div>
        <p className="register__desc">
          Enter your personal details and start your journey with us.
        </p>

        <TextField
          className="register__form__field"
          label="Username"
          variant="outlined"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <TextField
          className="register__form__field"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className="register__form__field"
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="register__form__row">
          <TextField
            className="register__form__field--sm"
            label="First Name"
            variant="outlined"
            value={first_name}
            onChange={(event) => setFirst_name(event.target.value)}
          />
          <TextField
            className="register__form__field--sm"
            label="Last Name"
            variant="outlined"
            value={last_name}
            onChange={(event) => setLast_name(event.target.value)}
          />
        </div>
        <TextField
          className="register__form__field"
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          className="register__form__field"
          label="Address"
          variant="outlined"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <div
          onClick={(e) => submitHandler(e)}
          color="primary"
          className="register__form__btn btn--primary"
          size="large"
          variant="contained"
        >
          Create Account
        </div>
        <p className="register__form__txt">
          Already have an account?{" "}
          <Link to="/" className="register__form__link">
            LOG IN
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
