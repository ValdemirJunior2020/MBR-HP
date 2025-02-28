import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function MonthFilter({ selectedMonth, onMonthChange }) {
  return (
    <FormControl style={{ minWidth: 200, marginBottom: "20px" }}>
      <InputLabel>Select Month</InputLabel>
      <Select value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)}>
        <MenuItem value="Nov">November</MenuItem>
        <MenuItem value="Dec">December</MenuItem>
        <MenuItem value="Jan">January</MenuItem>
        <MenuItem value="Feb">February</MenuItem> {/* Added February */}
      </Select>
    </FormControl>
  );
}

export default MonthFilter;
