import { PiArrowBendDownRightBold } from "react-icons/pi";
import { Shcop } from "../../../styles/__comment";

const ShowMoreBtn = ({ item }) => {
  return (
    <Shcop>
      <PiArrowBendDownRightBold />
      <span>{item.replays[0].user} riplyed</span>
    </Shcop>
  );
};

export default ShowMoreBtn;
