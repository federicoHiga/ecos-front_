import { useState } from "react";
import "./styles.css";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (evt) => {
    setSearchText(evt);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <IconButton className="searchbar-icon-button" disabled>
          <SearchIcon className="searchbar-icon" />
        </IconButton>
        <InputBase
          className="searchbar-input"
          placeholder="Buscar Proveedores"
          inputProps={{ "aria-label": "searchbar" }}
          value={searchText !== "" ? searchText : null}
          onChange={(evt) => handleSearch(evt.target.value)}
        />
      </div>
    </div>
  );
};

export default Searchbar;
