import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const OptionsFilter = () => {
  const [state, setState] = useContext(AppContext);

  const selectFilter = (e) => {
    const selectedValue = e.target.value;
    setState({
      ...state,
      selectedFilter: selectedValue,
    });
  };

  return (
    <>
      <label for="filters">Choose a filter:</label>
      <select name="filters" id="filters" onChange={(e) => selectFilter(e)}>
        <option value="all">all</option>
        <option value="state">state</option>
        <option value="city">city</option>
        <option value="genre">genre</option>
        <option value="name">name</option>
        <option value="address1">address</option>
      </select>
    </>
  );
};

export default OptionsFilter;