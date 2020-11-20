import React, { useContext } from "react";
import TableRow from "./TableRow.js";
import { AppContext } from "../AppContext";

const Table = () => {
  const [state, setState] = useContext(AppContext);

  const paginateRestaurants = (sortedRestaurants) => {
    return sortedRestaurants.slice(
      (state.currentPage - 1) * state.perPage,
      state.currentPage * state.perPage
    );
  };

  const sortRestaurants = (sortableRestaurants) => {
    return sortableRestaurants.sort(function (a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  };

  const displayRows = (selectedRestaurants) => {
    if (state.restaurants) {
      const sortedRestaurants = sortRestaurants(selectedRestaurants);
      const paginatedRestaurants = paginateRestaurants(sortedRestaurants);
      if (paginatedRestaurants.length) {
        return paginatedRestaurants.map((restaurant) => {
          return (
            <TableRow
              name={restaurant.name}
              city={restaurant.city}
              state={restaurant.state}
              address1={restaurant.address1}
              genre={restaurant.genre}
              hours={restaurant.hours}
              lat={restaurant.lat}
              long={restaurant.long}
              tags={restaurant.tags}
              telephone={restaurant.telephone}
              website={restaurant.website}
              zip={restaurant.zip}
            />
          );
        });
      } else {
        return <p>Sorry, no results!</p>;
      }
    }
  };

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>City</th>
        <th>State</th>
        <th>Address</th>
        <th>Genre</th>
        <th>Hours</th>
        <th>Lat</th>
        <th>Long</th>
        <th>Tags</th>
        <th>Telephone</th>
        <th>Website</th>
        <th>Zip</th>
      </tr>
      {state.restaurants && state.input
        ? displayRows(state.filtered)
        : displayRows(state.restaurants)}
    </table>
  );
};

export default Table;
