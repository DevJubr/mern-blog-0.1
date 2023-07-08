import {
  Header,
  NavPostDetails,
  NavPostDetailsItem,
  Tag,
  TagAndDate,
  Title,
} from "../../../styles/__postDetails";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineTags } from "react-icons/ai";

const HeaderComponent = () => {
  return (
    <Header>
      <NavPostDetails>
        <NavPostDetailsItem>
          home
          <FiChevronRight />
        </NavPostDetailsItem>
        <NavPostDetailsItem>
          category
          <FiChevronRight />
        </NavPostDetailsItem>
        <NavPostDetailsItem>
          title
          <FiChevronRight />
        </NavPostDetailsItem>
      </NavPostDetails>
      <Title>title: Lorem ipsum dolor sit amet.</Title>
      <TagAndDate>
        <Tag>
          <AiOutlineTags />
          tag
        </Tag>
        <span className="date">8 days ago</span>
      </TagAndDate>
    </Header>
  );
};

export default HeaderComponent;
