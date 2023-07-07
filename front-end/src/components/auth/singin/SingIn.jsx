import React from "react";
import {
  Form,
  FormCon,
  H1,
  Input,
  Section,
  SubmitButton,
} from "../../../styles/__auth";

const SingIn = () => {
  return (
    <Section>
      <div className="con">
        <FormCon>
          <Form>
            <H1>singin</H1>

            <div className="input__group">
              <Input type="text" placeholder="email" />
            </div>

            <div className="input__group">
              <Input type="password" placeholder="password" />
            </div>

            <SubmitButton type="submit" className="submit">
              submit
            </SubmitButton>
          </Form>
        </FormCon>
      </div>
    </Section>
  );
};

export default SingIn;
