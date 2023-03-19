import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ListOfJobs from "../../components/ListOfJobs/ListOfJobs";
import NoJobData from "../../components/NoJobData/NoJobData";
import MonthOldJobs from "../../components/MonthOldJobs/MonthOldJobs";
import ArchivedJobs from "../../components/ArchivedJobs/ArchviedJobs";
import InterviewingColumn from "../../components/InterviewingColumn/InterviewingColumn";

const HomePage = (props) => {
  const {
    jobListings,
    archivedJobs,
    deleteJobListing,
    addNewArchivedJob,
    interviewingJobs,
    addInterviewingJob,
    deleteInterviewingJob,
  } = props;
  return (
    <div>
      <Container maxWidth="lg" id="container">
        {jobListings.length > 0 ? (
          <Grid container spacing={2}>
            <Grid item sm={3}>
              <ListOfJobs
                jobListings={jobListings}
                deleteJobListing={deleteJobListing}
                addNewArchivedJob={addNewArchivedJob}
              />
            </Grid>
            <Grid item sm={3}>
              <MonthOldJobs jobListings={jobListings} />
            </Grid>
            <Grid item sm={3}>
              <ArchivedJobs archivedJobs={archivedJobs} />
            </Grid>
            <Grid item sm={3}>
              <InterviewingColumn
                interviewingJobs={interviewingJobs}
                deleteInterviewingJob={deleteInterviewingJob}
                addNewArchivedJob={addNewArchivedJob}
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
