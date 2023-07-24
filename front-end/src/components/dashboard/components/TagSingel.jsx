import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const TagSingel = ({ name, forI }) => {
  return (
    <div className="TagSingel">
      <div className="Tga__texts">
        <span className="tagT">{forI}</span>
        <h2 className="tagN">{name}</h2>
      </div>
      <div className="tagsIcon">
        <AiOutlineEdit />
        <AiOutlineDelete />
      </div>
    </div>
  );
};

export default TagSingel;
