import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import Pagination from "./Pagination";
import SearchFilter from "./SearchFilter";
import OptionsFilter from "./OptionsFilter";
import Table from "./Table.js";

const Main = () => {
  const [state, setState] = useContext(AppContext);

  return (
    <>
      {state !== undefined ? (
        <div className="App">
          <SearchFilter />
          <OptionsFilter />
          <Table />
          <Pagination />
        </div>
      ) : (
        <p>Hold on one moment..</p>
      )}
    </>
  );
};

export default Main;
