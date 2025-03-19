import "./Login.scss";
import logo from "../../assets/logo.svg";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { toggleLogin } from "../../redux/features/ui/ui";
import { useState } from "react";
import { useAuthenticateMutation } from "../../redux/services/core/core";

const Login = () => {
  const dispatch = useDispatch();
  const { visible } = useSelector((state: RootState) => state.ui);
  const [authenticate] = useAuthenticateMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="login" className={visible ? " visible" : ""}>
      <div
        id="login-shade"
        onClick={() => {
          dispatch(toggleLogin(false));
        }}
      ></div>
      <div id="login-modal">
        <div id="login-logo">
          <img src={logo} />
        </div>
        <h3>Log In</h3>
        <form>
          <Input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            label={"Email:"}
            type="text"
          />
          <Input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            label={"Password:"}
            type="password"
          />
          <Button
            type="button"
            onClick={() => {
              dispatch(toggleLogin(false));
              authenticate({email, password});
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
