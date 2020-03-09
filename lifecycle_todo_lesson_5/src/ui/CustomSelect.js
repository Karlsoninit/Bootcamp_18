import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const options = [
  { value: "all", label: "All" },
  { value: "react", label: "React" },
  { value: "redux", label: "Redux" },
  { value: "javascript", label: "JavaScript" }
];

const find = value => options.find(el => el.value === value);

const CustomSelect = ({ handleChoose, value }) => {
  console.log("value", value);
  return (
    <Select
      options={options}
      onChange={handleChoose}
      value={find(value) ? find(value) : value}
    />
  );
};

CustomSelect.defaultProps = {
  value: { value: "all", label: "All" }
};

CustomSelect.propTypes = {
  handleChoose: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default CustomSelect;
