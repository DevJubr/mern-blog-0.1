import styled, { keyframes } from "styled-components";

const fade458 = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0.25;
  }
`;

const Loader = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 10px;
`;

const Bar = styled.div`
  width: 8%;
  height: 24%;
  background: #d297ff;
  position: absolute;
  left: 50%;
  top: 30%;
  opacity: 1;
  border-radius: 50px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  animation: ${fade458} 1s linear infinite;
`;

const Bar1 = styled(Bar)`
  transform: rotate(0deg) translate(0, -130%);
  animation-delay: 0s;
`;

const Bar2 = styled(Bar)`
  transform: rotate(30deg) translate(0, -130%);
  animation-delay: -1.1s;
`;

const Bar3 = styled(Bar)`
  transform: rotate(60deg) translate(0, -130%);
  animation-delay: -1s;
`;

const Bar4 = styled(Bar)`
  transform: rotate(90deg) translate(0, -130%);
  animation-delay: -0.9s;
`;

const Bar5 = styled(Bar)`
  transform: rotate(120deg) translate(0, -130%);
  animation-delay: -0.8s;
`;

const Bar6 = styled(Bar)`
  transform: rotate(150deg) translate(0, -130%);
  animation-delay: -0.7s;
`;

const Bar7 = styled(Bar)`
  transform: rotate(180deg) translate(0, -130%);
  animation-delay: -0.6s;
`;

const Bar8 = styled(Bar)`
  transform: rotate(210deg) translate(0, -130%);
  animation-delay: -0.5s;
`;

const Bar9 = styled(Bar)`
  transform: rotate(240deg) translate(0, -130%);
  animation-delay: -0.4s;
`;

const Bar10 = styled(Bar)`
  transform: rotate(270deg) translate(0, -130%);
  animation-delay: -0.3s;
`;

const Bar11 = styled(Bar)`
  transform: rotate(300deg) translate(0, -130%);
  animation-delay: -0.2s;
`;

const Bar12 = styled(Bar)`
  transform: rotate(330deg) translate(0, -130%);
  animation-delay: -0.1s;
`;

const LoaderComponent = () => {
  return (
    <Loader>
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
      <Bar6 />
      <Bar7 />
      <Bar8 />
      <Bar9 />
      <Bar10 />
      <Bar11 />
      <Bar12 />
    </Loader>
  );
};
export default LoaderComponent;
