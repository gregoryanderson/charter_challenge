import React, { useState, useEffect } from "react";
const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [state, setState] = useState();

  const fetchRestaurants = async () => {
    const api_key = process.env.REACT_APP_API_KEY;
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: {
        Authorization: api_key,
      },
    })
      .then((response) => response.json())
      .then((response) =>
        setState({
          loaded: true,
          restaurants: response,
          currentPage: 1,
          perPage: 10,
          maxPages: 4,
        })
      )
      .catch((error) => setState({ status: "error", error }));
  };

  useEffect(function getRestaurants() {
    if (!state) {
      fetchRestaurants();
    }
  }, []);
  
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
