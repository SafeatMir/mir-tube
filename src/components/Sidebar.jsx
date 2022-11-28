import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto,md:95%" },
      flexDirection: { md: "column" },
      paddingTop: "5px",
      width: { xl: "240px" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && "#383838",
          color: "#e1e1e1",
        }}
        key={category.name}
        onClick={() => setSelectedCategory(category.name)}
      >
        <span style={{ marginRight: "15px" }}>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
