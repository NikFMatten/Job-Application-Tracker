import { Grid, Box, Paper } from "@mui/material";
import React from "react";
import ColumnTitle from "../ColumnTitle/ColumnTItle";
import SingleJob from "../SingleJob/SingleJob";

const RejectedJobs = (props) => {
  const {
    rejectedJobs,
    addNewArchivedJob,
    deleteRejectedJob,
    addInterviewingJob,
  } = props;
  return (
    <div>
      <ColumnTitle text={"Rejected"} color={"red"} />
      <Box sx={{ width: 300 }}>
        <Paper elevation={2} sx={{ bgcolor: "#ffb1b1", minHeight: 1000 }}>
          <Grid container spacing={2} sx={{ pb: 5, px: 3 }}>
            {[...rejectedJobs].reverse().map((job) => {
              return (
                <Grid item sm={12} key={job.id}>
                  <SingleJob
                    job={job}
                    displayArchivedJob={false}
                    interviewing={false}
                    displayArchiveButton={true}
                    addNewArchivedJob={addNewArchivedJob}
                    deleteJob={deleteRejectedJob}
                    addInterviewingJob={addInterviewingJob}
                    displayRejectedButton={false}
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

export default RejectedJobs;
