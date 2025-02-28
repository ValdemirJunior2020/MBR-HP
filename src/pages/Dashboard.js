import React, { useState } from "react";
import KpiSummary from "../components/KpiSummary";
import QAChart from "../components/QAChart";
import CallCenterChart from "../components/CallCenterChart";
import AgentsTable from "../components/AgentsTable";
import SearchFilter from "../components/SearchFilter";
import MonthFilter from "../components/MonthFilter"; // ✅ Ensure this is correct
import { Container, Grid, useMediaQuery } from "@mui/material";

function Dashboard() {
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCallCenter, setSelectedCallCenter] = useState("");
  const isMobile = useMediaQuery("(max-width: 600px)"); // Detect if on mobile

  const kpiData = {
    Nov: { voice: "87%", groups: "82%", ocr: "66%", agents: "320" },
    Dec: { voice: "89%", groups: "84%", ocr: "66%", agents: "320" },
    Jan: { voice: "90%", groups: "85%", ocr: "66%", agents: "320" },
    Feb: { voice: "TBD", groups: "TBD", ocr: "TBD", agents: "TBD" }, // Placeholder for February
  };

  const kpis = [
    { title: "Voice KPI", value: kpiData[selectedMonth].voice },
    { title: "Groups KPI", value: kpiData[selectedMonth].groups },
    { title: "OCR Score", value: kpiData[selectedMonth].ocr },
    { title: "Total Agents", value: kpiData[selectedMonth].agents },
  ];

  return (
    <Container>
      <h2>QA KPI Dashboard</h2>

      {/* Month Filter Dropdown */}
      <MonthFilter selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />

      {/* Search & Filter */}
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCallCenter={selectedCallCenter}
        setSelectedCallCenter={setSelectedCallCenter}
      />

      <Grid container spacing={isMobile ? 1 : 3}>
        {kpis.map((kpi, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <KpiSummary title={kpi.title} value={kpi.value} />
          </Grid>
        ))}
      </Grid>

      {/* Responsive Charts */}
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <QAChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <CallCenterChart />
        </Grid>
      </Grid>

      {/* Active Agents Table */}
      <AgentsTable searchTerm={searchTerm} selectedCallCenter={selectedCallCenter} />
    </Container>
  );
}

export default Dashboard;
