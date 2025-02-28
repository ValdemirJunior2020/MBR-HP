import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function KpiSummary({ title, value }) {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4" color="primary">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default KpiSummary;
