import React, { useState } from "react";
import styled from "styled-components";
import { AiFillDashboard } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

const NestedContainer = styled.div`
  padding: 1rem 1rem 0 1rem;
`;

const NestedOuter = styled.div`
  width: 100%;
  display: flex;
  height: 50px;
  align-items: center;
`;

const AItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1.2rem;
  text-transform: capitalize;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    cursor: pointer;
  }
`;

const NestedInner = styled.div`
  padding: 0.5rem 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  margin: -3rem 0 0 0;
  opacity: 0;
  transition: all 0.3s ease;
  /* You can use props here to conditionally apply styles */
  ${(props) =>
    props.isVisible &&
    `
    opacity: 1;
    margin: 0;
  `}
`;

const ANestedInnerItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: capitalize;
`;

export const NestedCon = styled.div`
  display: flex;
  flex-direction: column;
`;

const NestedListComponents = () => {
  const [isVisible, setisVisible] = useState(false);
  return (
    <NestedContainer className="nested">
      <NestedOuter className="nested__outer">
        <AItem className="A__item">
          <AiFillDashboard />
          <span className="title__of__aItem">databoard</span>
          <FiChevronRight onClick={() => setisVisible(!isVisible)} />
        </AItem>
      </NestedOuter>
      {/* Pass the isVisible prop to the NestedInner styled-component */}
      <NestedInner className="nested__inner" isVisible={isVisible}>
        <ANestedInnerItem className="A__nested__inner__item">
          <AiFillDashboard />
          <span className="title__of__nstdaItem">databoard</span>
        </ANestedInnerItem>
        <ANestedInnerItem className="A__nested__inner__item">
          <AiFillDashboard />
          <span className="title__of__nstdaItem">databoard</span>
        </ANestedInnerItem>
      </NestedInner>
    </NestedContainer>
  );
};

export default NestedListComponents;
