import { FaPeopleGroup, FaTags } from "react-icons/fa6";
import { GrArticle } from "react-icons/gr";
import { MdCategory } from "react-icons/md";
import HomeTopSingel from "../../components/HomeTopSingel";
import ChartComponent from "../../components/Apexcharts";

const HomeD = () => {
  return (
    <div className="HomeD">
      <div className="home__top">
        <HomeTopSingel count={45} icon={<FaPeopleGroup />} name={"visitors"} />
        <HomeTopSingel count={145} icon={<GrArticle />} name={"articles"} />
        <HomeTopSingel count={34} icon={<MdCategory />} name={"categorys"} />
        <HomeTopSingel count={94} icon={<FaTags />} name={"tags"} />
      </div>

      <ChartComponent />
    </div>
  );
};

export default HomeD;
