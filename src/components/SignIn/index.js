import React from "react";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SignInElements";

function SignIn() {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">QuantumBrief</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Contact Us</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput type="text" required />
            <FormLabel htmlFor="for">Company Name</FormLabel>
            <FormInput type="text" required />
            <FormLabel htmlFor="for">Company Name</FormLabel>
            <FormInput type="text" required />
            <FormLabel htmlFor="for">Phone Number</FormLabel>
            <FormInput type="tel" required />
            <FormButton type="submit">Send</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default SignIn;
