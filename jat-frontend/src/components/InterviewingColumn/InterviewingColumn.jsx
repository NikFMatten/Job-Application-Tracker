import { Grid, Box, Paper } from "@mui/material";
import React from "react";
import ColumnTitle from "../ColumnTitle/ColumnTItle";
import SingleJob from "../SingleJob/SingleJob";

const InterviewingColumn = (props) => {
  const {
    interviewingJobs,
    deleteInterviewingJob,
    addNewArchivedJob,
    addRejectedJob,
  } = props;
  return (
    <div>
      <ColumnTitle text={"Interviewing"} color={"#7eec7e"} />
      <Box sx={{ width: 300 }}>
        <Paper elevation={2} sx={{ bgcolor: "#c2f6c2", minHeight: 1000 }}>
          <Grid container spacing={2} sx={{ pb: 5, px: 3 }}>
            {[...interviewingJobs].map((job) => {
              return (
                <Grid item sm={12} key={job.id}>
                  <SingleJob
                    job={job}
                    deleteInterviewingJob={deleteInterviewingJob}
                    addNewArchivedJob={addNewArchivedJob}
                    displayArchiveButton={true}
                    displayRejectedButton={true}
                    interviewing={true}
                    interview_type={"HR/Recruiter"}
                    addRejectedJob={addRejectedJob}
                    deleteJob={deleteInterviewingJob}
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

export default InterviewingColumn;
