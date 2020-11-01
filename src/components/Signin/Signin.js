import React from "react";
import {
  Container,
  FormWrap,
  Form,
  Text,
  Icon,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormButton
} from "./SigninElements";
export default function Signin() {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}
