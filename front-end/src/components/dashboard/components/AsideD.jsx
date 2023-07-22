import ANestedList from "./ANestedList";
import { fakedsb } from "../../../utils/index";
const AsideD = () => {
  return (
    <aside className="Dashboard__asideBar">
      <ul className="Outter__List">
        {fakedsb?.map((item) => {
          return (
            <ANestedList
              icon={item?.icon}
              nFor={item?.title}
              nested={item?.nested}
            />
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideD;
