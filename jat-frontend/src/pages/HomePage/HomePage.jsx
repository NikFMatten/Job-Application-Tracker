import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ListOfJobs from "../../components/ListOfJobs/ListOfJobs";
import NoJobData from "../../components/NoJobData/NoJobData";
import MonthOldJobs from "../../components/MonthOldJobs/MonthOldJobs";

const HomePage = (props) => {
  const { jobListings } = props;
  return (
    <div>
      <Container maxWidth="lg" id="container">
        {jobListings.length > 0 ? (
          <Grid container spacing={2}>
            <ListOfJobs jobListings={jobListings} />
            <MonthOldJobs jobListings={jobListings} />
          </Grid>
        ) : (
          <NoJobData />
        )}
      </Container>
    </div>
  );
};

export default HomePage;
