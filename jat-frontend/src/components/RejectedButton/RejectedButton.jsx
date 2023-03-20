import React from "react";
import Button from "@mui/material/Button";

const RejectedButton = (props) => {
  const { job, deleteJob, addRejectedJob } = props;
  const jobToAdd = {
    company_name: job.company_name,
    job_title: job.job_title,
    job_description: job.job_description,
    job_listing_url: job.job_listing_url,
    salary_range: job.salary_range,
    office_policy: job.office_policy,
    job_location: job.job_location,
    date_applied: job.date_applied,
  };

  const jobToDelete = job.id;

  const handleClick = () => {
    addRejectedJob(jobToAdd);
    deleteJob(jobToDelete);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick} sx={{ mb: 2 }}>
        Rejected
      </Button>
    </>
  );
};

export default RejectedButton;
