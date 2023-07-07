import { Link } from "react-router-dom";
import { BiSolidChevronsLeft, BiSolidChevronsRight } from "react-icons/bi";
import {
  PaginationButton,
  PaginationIcon,
  PaginationList,
  PaginationListItem,
  PaginationSection,
} from "../../../styles/__pagination";

const Pagination = () => {
  return (
    <>
      <PaginationSection>
        <PaginationButton className="left">
          <PaginationIcon className="left">
            <BiSolidChevronsLeft />
          </PaginationIcon>
        </PaginationButton>
        <PaginationList>
          <PaginationListItem>
            <Link to={"/"}>1</Link>
          </PaginationListItem>
          <PaginationListItem>
            <Link to={"/"}>2</Link>
          </PaginationListItem>
          <PaginationListItem>
            <Link to={"/"}>3</Link>
          </PaginationListItem>
          <PaginationListItem>
            <Link to={"/"}>4</Link>
          </PaginationListItem>
        </PaginationList>
        <PaginationButton className="right">
          <PaginationIcon className="right">
            <BiSolidChevronsRight />
          </PaginationIcon>
        </PaginationButton>
      </PaginationSection>
    </>
  );
};

export default Pagination;
