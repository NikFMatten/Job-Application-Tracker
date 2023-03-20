import { Button } from "@mui/material";
import React from "react";

const ArchiveButton = (props) => {
  const { job, deleteJob, addNewArchivedJob } = props;
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
    addNewArchivedJob(jobToAdd);
    deleteJob(jobToDelete);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Archive Job
      </Button>
    </>
  );
};

export default ArchiveButton;
