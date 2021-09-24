import imgCheck from "../images/Checkmark.svg";

const CheckList = ({ description }) => {
  return (
    <div className="flex gap-2">
      <img src={imgCheck} alt="check" />
      <p>{description}</p>
    </div>
  );
};

export default CheckList;
