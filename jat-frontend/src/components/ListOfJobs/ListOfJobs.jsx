import { Grid, Box, Paper } from "@mui/material";
import React from "react";
import ColumnTitle from "../ColumnTitle/ColumnTItle";
import SingleJob from "../SingleJob/SingleJob";

const ListOfJobs = (props) => {
  const {
    jobListings,
    deleteJobListing,
    addNewArchivedJob,
    addInterviewingJob,
  } = props;

  const todaysDate = new Date();
  const monthAgo = new Date();
  monthAgo.setDate(monthAgo.getDate() - 29);

  const results = jobListings.filter((d) => {
    const time = new Date(d.date_applied);
    return monthAgo < time && time < todaysDate;
  });

  return (
    <div>
      <ColumnTitle text={"Applied Jobs"} color={"#cacaca"} />
      <Box sx={{ width: 300 }}>
        <Paper elevation={2} sx={{ bgcolor: "#e7e7e7", minHeight: 1000 }}>
          <Grid container spacing={2} sx={{ pb: 5, px: 3 }}>
            {[...results].reverse().map((job) => {
              return (
                <Grid item sm={12} key={job.id}>
                  <SingleJob
                    job={job}
                    deleteJobListing={deleteJobListing}
                    addNewArchivedJob={addNewArchivedJob}
                    displayArchiveButton={true}
                    addInterviewingJob={addInterviewingJob}
                    interviewing={false}
                  />
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
