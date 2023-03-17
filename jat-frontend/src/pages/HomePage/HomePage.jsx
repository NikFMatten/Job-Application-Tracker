import React, { useState } from "react";
import test_job from "../../test_job.json";
// MUI imports
import Container from "@mui/material/Container";
import SingleJob from "../../components/SingleJob/SingleJob";

const HomePage = (props) => {
  return (
    <div>
      <Container maxWidth="lg" id="container">
        <SingleJob test_job={test_job} />
      </Container>
    </div>
  );
};

export default HomePage;
