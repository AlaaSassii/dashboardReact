import { createContext, useContext, useState } from "react";

const HeaderTitleContext = createContext("");

export const useHeaderTitleContext = () => useContext(HeaderTitleContext);

const HeaderTitleContextProvider = ({ children }) => {
  const [headerTitle, setHeaderTitle] = useState("eee");

  return (
    <HeaderTitleContext.Provider value={{ headerTitle, setHeaderTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
};

export default HeaderTitleContextProvider;
