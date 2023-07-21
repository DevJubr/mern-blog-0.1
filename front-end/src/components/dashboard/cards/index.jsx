import styled from "styled-components";
import { FaPeopleGroup } from "react-icons/fa6";

const Card = styled.div`
  width: 250px;
  height: 150px;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4.count {
    font-size: 1.5rem;
  }

  span.title__of__card {
    font-size: 1.1rem;
    text-transform: capitalize;
    letter-spacing: 1px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
  justify-content: center;
`;

// Usage:

const CardsD = () => {
  return (
    <Card>
      <FaPeopleGroup />
      <Details>
        <h4 className="count">55</h4>
        <span className="title__of__card">visitors</span>
      </Details>
    </Card>
  );
};
export default CardsD;
