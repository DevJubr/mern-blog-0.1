import React, { useState } from "react";
import styled from "styled-components";
import { AiFillDashboard } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineArticle, MdPostAdd } from "react-icons/md";
import { LiaBorderAllSolid } from "react-icons/lia";
import { AiOutlineUser, AiFillTags, AiOutlineUserAdd } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
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
    opacity: 1;
    z-index: 9999;
  }
`;

const NestedInner = styled.div`
  padding: 0.5rem 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  margin: -1rem 0 0 0;
  opacity: 0;
  transition: all 0.3s ease;
  /* You can use props here to conditionally apply styles */
  ${(props) =>
    props.isVisible &&
    `
    opacity: 8;
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
  gap: 2rem;
`;

const NestedListComponents = ({ icon, title, nested, style }) => {
  const [isVisible, setisVisible] = useState(false);
  return (
    <NestedContainer style={style}>
      <NestedOuter>
        <AItem>
          {icon}
          <span className="dsbl">{title}</span>
          <FiChevronRight
            style={style ? { visibility: "hidden" } : null}
            className="dsbl"
            onClick={() => setisVisible(!isVisible)}
          />
        </AItem>
      </NestedOuter>
      <NestedInner isVisible={isVisible}>
        {nested?.map((nes) => (
          <ANestedInnerItem>
            {nes?.icon}
            <span>{nes?.title}</span>
          </ANestedInnerItem>
        ))}
      </NestedInner>
    </NestedContainer>
  );
};

export default NestedListComponents;
