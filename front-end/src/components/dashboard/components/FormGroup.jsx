const FormGroup = ({ name, type, optionA }) => {
  if (type == "select") {
    return (
      <>
        <div className="FormGroup">
          <select name={name} id={name}>
            {optionA.map((valueOfOption) => (
              <option value={valueOfOption}>{valueOfOption}</option>
            ))}
          </select>
        </div>
      </>
    );
  } else {
    return (
      <div className="FormGroup">
        <label htmlFor="Input">{name}</label>
        <input type="text" placeholder={`enter your ${name}`} id="Input" />
        <span className="errorMsg">{`in valid ${name}`}</span>
      </div>
    );
  }
};

export default FormGroup;
