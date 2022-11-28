import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../utils/logo.png";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p="8px"
    sx={{
      position: "sticky",
      background: "#212121",
      top: 0,
      borderBottom: "1px solid #3d3d3d",
    }}
  >
    <div style={{ width: "40%" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={30}></img>
      </Link>
    </div>

    <SearchBar />
  </Stack>
);

export default Navbar;
