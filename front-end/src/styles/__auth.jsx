import { styled } from "styled-components";
import { Link } from "react-router-dom";
export const Section = styled.section`
  background: #3f2375;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background: #4e2a93;
  width: 45%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  border-radius: 1rem;
`;

export const Input = styled.input`
  text-transform: capitalize;
  padding: 1.2rem;
  padding-right: 10rem;
  border-radius: 0.5rem;
  background: #4e2a93;
  box-shadow: inset 6px 6px 12px #42247d, inset -6px -6px 12px #5a30a9;
  color: aliceblue;
  font-size: 1rem;
  letter-spacing: 1px;

  ::placeholder {
    color: #d1b6ff;
    letter-spacing: 1px;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.88rem 3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 1rem;
  background: linear-gradient(145deg, #532d9d, #462684);
  box-shadow: 6px 6px 12px #42247d, -6px -6px 12px #5a30a9;
  color: #d1b6ff;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
`;

export const Img = styled.div`
  width: 40px;
  height: 40px;
  background: aliceblue;
  border-radius: 50%;
`;
export const NavigateToLogin = styled(Link)`
  font-size: 0.7rem;
  padding: 0.4rem;
  border: 1px solid #dddddd21;
  border-radius: 0.3rem;
`;
export const InputWrapper = styled.div`
  background: #f0f8ff63;
  padding: 1.4rem;
  padding-right: 10rem;
  border-radius: 0.5rem;
`;

export const Label = styled.label`
  padding: 0.5rem 1.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: capitalize;
  font-size: 0.77rem;
  background: linear-gradient(145deg, #532d9d, #462684);
  box-shadow: 6px 6px 12px #42247d, -6px -6px 12px #5a30a9;
  color: #d1b6ff;
  letter-spacing: 1px;
`;
