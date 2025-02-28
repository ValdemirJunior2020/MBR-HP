import React from "react";
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SearchFilter({ searchTerm, setSearchTerm, selectedCallCenter, setSelectedCallCenter }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
      {/* Search Bar */}
      <TextField
        label="Search Call Center or Agent"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ flex: 1, minWidth: "200px" }}
      />

      {/* Call Center Filter */}
      <FormControl style={{ flex: 1, minWidth: "200px" }}>
        <InputLabel>Select Call Center</InputLabel>
        <Select value={selectedCallCenter} onChange={(e) => setSelectedCallCenter(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Buwelo">Buwelo</MenuItem>
          <MenuItem value="Concentrix">Concentrix</MenuItem>
          <MenuItem value="Ideal">Ideal</MenuItem>
          <MenuItem value="Tep">Tep</MenuItem>
          <MenuItem value="WNS">WNS</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchFilter;
