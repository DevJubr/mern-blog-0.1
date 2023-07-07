import { Link } from "react-router-dom";
import {
  Form,
  FormCon,
  H1,
  Input,
  Section,
  SubmitButton,
  Content,
  Img,
  InputWrapper,
  Label,
  NavigateToLogin,
} from "../../../styles/__auth";

const SingUp = () => {
  return (
    <Section>
      <div className="con">
        <FormCon>
          <Form>
            <H1>singup</H1>
            <div className="input__group">
              <Input type="text" placeholder="user name" />
            </div>
            <div className="input__group">
              <Input type="text" placeholder="email" />
            </div>

            <div className="input__group">
              <Input type="password" placeholder="password" />
            </div>
            <div className="input__group">
              <Input type="file" id="fileInput" hidden />
              <Content>
                <Img></Img>
                <InputWrapper></InputWrapper>
                <Label htmlFor="fileInput" className="lableinpu">
                  browse
                </Label>
              </Content>
            </div>
            <SubmitButton type="submit" className="submit">
              submit
            </SubmitButton>
            <NavigateToLogin to={"/singin"}>
              already have an account?
            </NavigateToLogin>
          </Form>
        </FormCon>
      </div>
    </Section>
  );
};

export default SingUp;
