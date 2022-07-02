import React, { useState } from "react";
import { Marginer } from "./marginer/Marginer";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  MutedText,
  SubmitButton,
} from "./common";
import { login } from "../../../state/actions/userActions";
// import { useDispatch, useSelector } from "react-redux";
// import { login, clearErrors } from "../../../state/actions/userActions";
// import { useAlert } from "react-alert";
// import { useNavigate } from "react-router-dom";

const LoginForm = ({ switchToSignUp, dispatch }) => {
  // const dispatch = useDispatch();
  // const alert = useAlert();
  // const navigate = useNavigate();

  // const { error, loading, isAuthenticated } = useSelector(
  //   (state) => state.user,
  // );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    // console.log("form submitted");
  };

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }
  //   if (isAuthenticated) {
  //     navigate("/account");
  //   }
  // }, [dispatch, alert, error, isAuthenticated, navigate]);

  return (
    <BoxContainer onSubmit={loginSubmit}>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          required
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink to="/password/forgot">Forgot Password</MutedLink>
      <Marginer direction="vertical" margin="1.2em" />
      <SubmitButton type="submit">Login</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedText>
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignUp}>
          SignUp
        </BoldLink>
      </MutedText>
    </BoxContainer>
  );
};

export default LoginForm;
