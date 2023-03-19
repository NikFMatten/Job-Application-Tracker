import React from "react";
import { Grid, Box, Paper } from "@mui/material";
import ColumnTitle from "../ColumnTitle/ColumnTItle";
import SingleJob from "../SingleJob/SingleJob";

const ArchivedJobs = (props) => {
  const { archivedJobs } = props;
  return (
    <div>
      <ColumnTitle text={"Archived Jobs"} color={"#999999"} />
      <Box sx={{ width: 300 }}>
        <Paper elevation={2} sx={{ bgcolor: "#cacaca", minHeight: 1000 }}>
          <Grid container spacing={2} sx={{ pb: 5, px: 3 }}>
            {}
            {[...archivedJobs].reverse().map((job) => {
              return (
                <Grid item sm={12} key={job.id}>
                  <SingleJob job={job} displayArchiveButton={false} />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default ArchivedJobs;
