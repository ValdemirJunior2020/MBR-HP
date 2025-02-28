import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

function AgentsTable({ searchTerm, selectedCallCenter }) {
  const agentsData = [
    { callCenter: "Buwelo", voice: 40, tickets: 33, total: 73 },
    { callCenter: "Concentrix", voice: 51, tickets: 40, total: 91 },
    { callCenter: "Ideal", voice: 26, tickets: 0, total: 26 },
    { callCenter: "Tep", voice: 41, tickets: 0, total: 41 },
    { callCenter: "WNS", voice: 34, tickets: 0, total: 34 },
    { callCenter: "Buwelo-Phi", voice: 0, tickets: 35, total: 35 },
  ];

  // Apply search and filter
  const filteredData = agentsData.filter((agent) => {
    const matchesSearch = agent.callCenter.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedCallCenter ? agent.callCenter === selectedCallCenter : true;
    return matchesSearch && matchesFilter;
  });

  return (
    <TableContainer component={Paper} style={{ marginTop: "20px" }}>
      <h3 style={{ textAlign: "center", backgroundColor: "black", color: "white", padding: "10px" }}>
        Active Agents Per Call Center
      </h3>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#1976d2", color: "white" }}>
            <TableCell style={{ color: "white" }}>Call Center</TableCell>
            <TableCell style={{ color: "white" }} align="right">Voice Agents</TableCell>
            <TableCell style={{ color: "white" }} align="right">Ticket Agents</TableCell>
            <TableCell style={{ color: "white" }} align="right">Total Agents</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.callCenter}</TableCell>
              <TableCell align="right">{row.voice}</TableCell>
              <TableCell align="right">{row.tickets}</TableCell>
              <TableCell align="right"><strong>{row.total}</strong></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AgentsTable;
