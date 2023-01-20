import React, { useEffect, useState } from "react";
import axios from "axios";

const AxioContext = React.createContext();

function AxioContextProvider(props) {
  return (
    <AxioContext.Provider
      value={{
  
      
      }}
    >
      {props.children}
    </AxioContext.Provider>
  );
}

export { AxioContext, AxioContextProvider };
