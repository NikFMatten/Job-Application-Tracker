import React from "react";
import Container from "@mui/material/Container";
import ListOfJobs from "../../components/ListOfJobs/ListOfJobs";
import NoJobData from "../../components/NoJobData/NoJobData";

const HomePage = (props) => {
  const { jobListings } = props;
  return (
    <div>
      <Container maxWidth="lg" id="container">
        {jobListings.length > 0 ? (
          <ListOfJobs jobListings={jobListings} />
        ) : (
          <NoJobData />
        )}
      </Container>
    </div>
  );
};

export default HomePage;
