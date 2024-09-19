import { useState } from "react";
import Items from "../assets/Mock.json";
import Filterdata from "../assets/Mock.json";
import { createContext } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(Items);
  const [data2, setData2] = useState(Filterdata);

  return (
    <DataContext.Provider value={(data, data2)}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
