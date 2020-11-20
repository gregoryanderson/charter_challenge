import React from "react";
import { AppProvider } from "./AppContext";
import Main from "./components/Main";
import './App.css'

const App = () => {

  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default App;
