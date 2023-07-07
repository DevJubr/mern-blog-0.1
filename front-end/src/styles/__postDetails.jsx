import { styled } from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

export const NavPostDetails = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: capitalize;
`;
export const ImgContainear = styled.div`
  width: 100%;
`;
export const NavPostDetailsItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 2rem;
`;

export const TagAndDate = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Tag = styled.span`
  display: flex !important;
  align-items: center;
`;

export const BigImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const Texts = styled.p`
  line-height: 38px;
  text-transform: capitalize;
  text-align: justify;
`;
