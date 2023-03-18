import { Grid, Box, Paper } from "@mui/material";
import React from "react";
import SingleJob from "../SingleJob/SingleJob";

const ListOfJobs = (props) => {
  const { jobListings } = props;

  return (
    <div>
      <Box sx={{ width: 300 }}>
        <Paper elevation={2} sx={{ bgcolor: "#999999" }}>
          <Grid container spacing={2} sx={{ pb: 5, px: 3 }}>
            {[...jobListings].reverse().map((job) => {
              return (
                <Grid item sm={12} key={job.id}>
                  <SingleJob job={job} />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default ListOfJobs;
