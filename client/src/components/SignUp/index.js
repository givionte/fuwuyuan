import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";
import PropTypes from "prop-types";

import Loading from "../Alerts/Loading";
import * as routes from "../../routing/routes";
import ErrorMessage from "../Alerts/Error";
import * as Styled from "./style";
import SuccessMessage from "../Alerts/Success";
import { useAtom } from "jotai";
import { customErrorAtom, successAlertAtom } from "../../state/store";

const SIGN_UP = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

const SignUpPage = ({ history, refetch }) => (
  <Styled.Container>
    <SignUpForm history={history} refetch={refetch} />
  </Styled.Container>
);

SignUpPage.propTypes = {
  history: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const SignUpForm = (props) => {
  const client = useApolloClient();

  const [successAlert, setSuccessAlert] = useAtom(successAlertAtom);
  const [customError, setCustomError] = useAtom(customErrorAtom);

  const [
    { username, email, password, passwordConfirmation },
    setState,
  ] = useState(INITIAL_STATE);

  const [signUp, { loading, error }] = useMutation(SIGN_UP, {
    onError: (err) => {
      setSuccessAlert((a) => (a = false));
    },
    onCompleted: (data) => {
      setSuccessAlert((a) => (a = true));
    },
  });

  useEffect(() => {
    if (successAlert) {
      setTimeout(() => {
        setSuccessAlert((a) => (a = false));
      }, 5000);
    }
  }, [successAlert, setSuccessAlert]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = async (e, signUp) => {
    e.preventDefault();

    try {
      if (password !== passwordConfirmation) {
        setCustomError((c) => (c = "Password doesn't match"));
      } else {
        localStorage.removeItem("token");
        client.resetStore();

        setCustomError((c) => (c = null));
        await signUp({
          variables: {
            username: username,
            email: email,
            password: password,
          },
        }).then(async ({ data }) => {
          setState({ ...INITIAL_STATE });
          setTimeout(() => {
            localStorage.setItem("token", data.signUp.token);
            props.refetch();
            props.history.push(routes.DASHBOARD);
          }, 5000);
        });
      }
    } catch {}
  };

  return (
    <Styled.Box onSubmit={(e) => onSubmit(e, signUp)}>
      <Styled.Title>Sign Up</Styled.Title>
      <Styled.Label>
        <Styled.Span>
          <Styled.LabelName>Username</Styled.LabelName>
        </Styled.Span>
        <Styled.InputUserName
          name="username"
          value={username}
          onChange={onChange}
          type="text"
        />
      </Styled.Label>
      <Styled.Label>
        <Styled.Span>
          <Styled.LabelName>Email Address</Styled.LabelName>
        </Styled.Span>
        <Styled.InputEmail
          name="email"
          value={email}
          onChange={onChange}
          type="email"
          autoComplete="username"
          required
        />
      </Styled.Label>
      <Styled.Label>
        <Styled.Span>
          <Styled.LabelName>Password</Styled.LabelName>
        </Styled.Span>
        <Styled.InputPassword
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          autoComplete="new-password"
          required
        />
      </Styled.Label>
      <Styled.Label>
        <Styled.Span>
          <Styled.LabelName>Confirm Password</Styled.LabelName>
        </Styled.Span>
        <Styled.InputConfirmPassword
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={onChange}
          type="password"
          autoComplete="new-password"
          required
        />
      </Styled.Label>
      <Styled.SubmitButton type="submit">Sign Up</Styled.SubmitButton>
      {loading && <Loading />}
      {successAlert && (
        <SuccessMessage message="Successfully Signed Up!  You will receive an email to confirm your account!" />
      )}
      {error && <ErrorMessage error={error} />}
      {customError && <ErrorMessage customError={customError} />}
    </Styled.Box>
  );
};

SignUpForm.propTypes = {
  props: PropTypes.object,
};

const SignUpLink = () => (
  <div>
    <h5>
      <Link to={routes.FORGOT_PASSWORD}>Forgot Password?</Link>
    </h5>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </div>
);

export default withRouter(SignUpPage);

export { SignUpForm, SignUpLink };
