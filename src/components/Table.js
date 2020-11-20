import React, { useContext } from "react";
import TableRow from "./TableRow.js";
import { AppContext } from "../AppContext";

const Table = () => {
  const [state, setState] = useContext(AppContext);

  const displayRows = (restaurants) => {
    if (state.restaurants) {
      return restaurants.map((restaurant) => {
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
    }
  };

  console.log({ state });

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
      {displayRows(state.restaurants)}
    </table>
  );
};

export default Table;
