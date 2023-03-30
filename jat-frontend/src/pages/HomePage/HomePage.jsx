import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ListOfJobs from "../../components/ListOfJobs/ListOfJobs";
import NoJobData from "../../components/NoJobData/NoJobData";
import MonthOldJobs from "../../components/MonthOldJobs/MonthOldJobs";
import ArchivedJobs from "../../components/ArchivedJobs/ArchviedJobs";
import InterviewingColumn from "../../components/InterviewingColumn/InterviewingColumn";
import RejectedJobs from "../../components/RejectedJobs/RejectedJobs";

const HomePage = (props) => {
  const {
    jobListings,
    archivedJobs,
    deleteJobListing,
    addNewArchivedJob,
    interviewingJobs,
    addInterviewingJob,
    deleteInterviewingJob,
    rejectedJobs,
    addRejectedJob,
    deleteRejectedJob,
    deleteArchivedJob,
  } = props;
  return (
    <div>
      <Container id="container">
        {jobListings.length > 0 ? (
          <Grid container spacing={10} sx={{ width: "max-content", ml: -30 }}>
            <Grid item sm={2}>
              <ListOfJobs
                jobListings={jobListings}
                deleteJobListing={deleteJobListing}
                addNewArchivedJob={addNewArchivedJob}
                addInterviewingJob={addInterviewingJob}
                addRejectedJob={addRejectedJob}
              />
            </Grid>
            <Grid item sm={2}>
              <MonthOldJobs
                jobListings={jobListings}
                deleteJobListing={deleteJobListing}
                addNewArchivedJob={addNewArchivedJob}
                addInterviewingJob={addInterviewingJob}
                addRejectedJob={addRejectedJob}
              />
            </Grid>
            <Grid item sm={2}>
              <InterviewingColumn
                interviewingJobs={interviewingJobs}
                deleteInterviewingJob={deleteInterviewingJob}
                addNewArchivedJob={addNewArchivedJob}
                addRejectedJob={addRejectedJob}
              />
            </Grid>
            <Grid item sm={2}>
              <RejectedJobs
                rejectedJobs={rejectedJobs}
                addNewArchivedJob={addNewArchivedJob}
                deleteRejectedJob={deleteRejectedJob}
                addInterviewingJob={addInterviewingJob}
              />
            </Grid>
            <Grid item sm={2}>
              <ArchivedJobs
                archivedJobs={archivedJobs}
                deleteArchivedJob={deleteArchivedJob}
                addInterviewingJob={addInterviewingJob}
                addRejectedJob={addRejectedJob}
              />
            </Grid>
          </Grid>
        ) : (
          <NoJobData />
        )}
      </Container>
    </div>
  );
};

export default HomePage;
