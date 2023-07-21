import ChartComponent from "../Chart";
import CardsD, { CardsContainer } from "../cards/index";

const DashboardMainPage = () => {
  return (
    <>
      <CardsContainer>
        <CardsD />
        <CardsD />
        <CardsD />
        <CardsD />
        <CardsD />
        <CardsD />
      </CardsContainer>
      <ChartComponent />
    </>
  );
};

export default DashboardMainPage;
