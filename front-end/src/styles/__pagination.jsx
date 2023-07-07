import { styled } from "styled-components";

export const PaginationSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0;
`;

export const PaginationButton = styled.button`
  width: 55px;
  height: 35px;
  background: #c49ef6;
  border-radius: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PaginationIcon = styled.span`
  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
`;

export const PaginationListItem = styled.li`
  background: #ebd3ff;
  padding: 1rem;
  border-radius: 50%;
  width: 0;
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: black !important;
  }
`;
