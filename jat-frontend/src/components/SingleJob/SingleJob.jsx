import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SingleJob = (props) => {
  const { test_job } = props;
  return (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {test_job.job_title}
        </Typography>
        <Typography variant="h5">{test_job.company_name}</Typography>
        <Typography variant="body2">
          Applied on <br /> {test_job.date_applied}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More info</Button>
      </CardActions>
    </>
  );
};

export default SingleJob;
