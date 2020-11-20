import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const Pagination = () => {
  const [state, setState] = useContext(AppContext);
  const { currentPage, maxPages } = state;

  const handleClick = (direction) => {
    if (direction === "back") {
      setState({
        ...state,
        currentPage: state.currentPage - 1,
      });
    } else {
      if (direction === "forward") {
        setState({
          ...state,
          currentPage: state.currentPage + 1,
        });
      }
    }
  };

  return (
    <>
      {currentPage > 1 && (
        <button onClick={() => handleClick("back")}>Back</button>
      )}
      {currentPage < maxPages && (
        <button onClick={() => handleClick("forward")}>More Results</button>
      )}
    </>
  );
};

export default Pagination;
