import "./DropdownMenu.scss";

const DropdownMenu = () => {
  return (
    <div className="dropDownMenu">
      <label htmlFor="type" className="dropDownMenu__label">
        Choose a type:{" "}
      </label>
      <select name="type" id="type" className="dropDownMenu__options">
        <option value="life">Life</option>
        <option value="work">Work</option>
        <option value="relationship">Relationship</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
