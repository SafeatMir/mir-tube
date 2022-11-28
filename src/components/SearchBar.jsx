import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();
  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: "12px",
        border: "1px solid #3d3d3d",
        color: "#e1e1e1",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        height: "36px",
        backgroundColor: "#181818",
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "6px",
          color: "#e1e1e1",
          width: "35px",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
