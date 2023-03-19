import React from "react";
import { Grid, Box, Paper } from "@mui/material";
import ColumnTitle from "../ColumnTitle/ColumnTItle";
import SingleJob from "../SingleJob/SingleJob";

const MonthOldJobs = (props) => {
  const { jobListings } = props;

  const endDate = new Date("2000-03-17T16:26:12-06:00");
  const monthAgo = new Date();
  monthAgo.setDate(monthAgo.getDate() - 30);

  const results = jobListings.filter((d) => {
    const time = new Date(d.date_applied);
    return endDate < time && time < monthAgo;
  });

  return (
    <div>
      <ColumnTitle text={"30+ Days Old"} color={"#ffc966"} />
      <Box sx={{ width: 300 }}>
        <Paper elevation={2} sx={{ bgcolor: "#ffe4b3", minHeight: 1000 }}>
          <Grid container spacing={2} sx={{ pb: 5, px: 3 }}>
            {results.map((job) => {
              return (
                <Grid item sm={12} key={job.id}>
                  <SingleJob job={job} displayArchiveButton={true} />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default MonthOldJobs;
