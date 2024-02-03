import { createContext, useContext, useState } from "react";

const MenuContext = createContext(false);

export const useMenuContext = () => useContext(MenuContext);

const MenuContextProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuContextProvider;
