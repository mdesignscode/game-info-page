import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const SearchTextContext = createContext();

export function SearchTextProvider ({children}) {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchTextContext.Provider value={{searchText, setSearchText}}>
      {children}
    </SearchTextContext.Provider>
  )
}

SearchTextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
