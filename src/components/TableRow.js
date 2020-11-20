import React from "react";
import TableData from "./TableData.js";

const TableRow = ({
  name,
  city,
  state,
  address1,
  genre,
  hours,
  lat,
  long,
  tags,
  telephone,
  website,
  zip,
}) => {
  return (
    <tr>
      <TableData info={name} />
      <TableData info={city} />
      <TableData info={state} />
      <TableData info={address1} />
      <TableData info={genre} />
      <TableData info={hours} />
      <TableData info={lat} />
      <TableData info={long} />
      <TableData info={tags} />
      <TableData info={telephone} />
      <TableData info={website} />
      <TableData info={zip} />
    </tr>
  );
};

export default TableRow;
