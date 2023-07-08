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

export const ArticleOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
`;

export const LikeAndView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LikeCon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #f0f8ff9e;
  padding: 0.3rem 0.8rem;
  border-radius: 0.5rem;
`;

export const OuterTags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  span {
    border: 1px solid #b598ff9e;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
  }
`;

export const OuterRiletedPosts = styled.div`
  width: 100%;
`;

export const RPost = styled.div`
  width: calc(100% / 4);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.52rem;
`;

export const ImgForR = styled.div`
  width: 100%;
  height: 130px;
`;

export const RImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RTitle = styled.p`
  font-size: 0.8rem;
`;

export const RHead = styled.p`
  text-transform: capitalize;
  margin: 0.8rem 0 1.3rem 0;
  font-size: 1.4rem;
`;
