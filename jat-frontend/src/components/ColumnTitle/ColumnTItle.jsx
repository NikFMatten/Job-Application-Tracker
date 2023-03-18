import React from "react";
import { Paper, Typography } from "@mui/material";

const ColumnTitle = (props) => {
  const { text, color } = props;
  return (
    <>
      <Paper elevation={2} sx={{ width: 300, pb: 3, bgcolor: color }}>
        <Typography variant="h5" align="center">
          {text}
        </Typography>
      </Paper>
    </>
  );
};

export default ColumnTitle;
