import {
  Form,
  FormCon,
  H1,
  Input,
  Section,
  SubmitButton,
} from "../../../styles/__auth";
import LoaderComponent from "../../WebPage/loder/Loading";

const Login = () => {
  return (
    <Section>
      <div className="con">
        <FormCon>
          <Form>
            <H1>Login</H1>

            <div className="input__group">
              <Input type="text" placeholder="email" />
            </div>

            <div className="input__group">
              <Input type="password" placeholder="password" />
            </div>

            <SubmitButton type="submit" className="submit">
              submit
              {/* <LoaderComponent /> */}
            </SubmitButton>
          </Form>
        </FormCon>
      </div>
    </Section>
  );
};

export default Login;
