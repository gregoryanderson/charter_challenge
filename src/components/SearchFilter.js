import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const SearchFilter = () => {
  const [state, setState] = useContext(AppContext);

  const determineResultsWithoutFilter = (inputValue) => {
    if (!state.selectedFilter || state.selectedFilter === "all") {
      return state.restaurants.filter((res) => {
        const upCaseResName = res.name.toUpperCase();
        const upCaseResState = res.state.toUpperCase();
        const upCaseResGenres = res.genre.toUpperCase();
        const upCaseResAddress = res.address1.toUpperCase();
        const upCaseResCity = res.city.toUpperCase();
        if (
          upCaseResName.includes(inputValue) ||
          upCaseResState.includes(inputValue) ||
          upCaseResGenres.includes(inputValue) ||
          upCaseResAddress.includes(inputValue) ||
          upCaseResCity.includes(inputValue)
        ) {
          return res;
        }
      });
    } else {
      return state.restaurants.filter((res) => {
        const upCaseResElement = res[state.selectedFilter].toUpperCase();
        if (upCaseResElement.includes(inputValue)) {
          return res;
        }
      });
    }
  };

  const determineMaxPages = (filteredRestaurants) => {
    const numberOfRestaurants = filteredRestaurants.length;
    const maxPages = numberOfRestaurants / state.perPage;
    return Math.ceil(maxPages);
  };

  const filterRestaurants = (e) => {
    const inputValue = e.target.value.toUpperCase();
    const filteredRestaurants = determineResultsWithoutFilter(inputValue);
    const maxPages = determineMaxPages(filteredRestaurants);
    setState({
      ...state,
      input: inputValue,
      filtered: filteredRestaurants,
      maxPages: maxPages,
    });
  };

  return (
    <>
      <label for="search">Search:</label>
      <input name="search" onChange={(e) => filterRestaurants(e)}></input>
    </>
  );
};

export default SearchFilter;
