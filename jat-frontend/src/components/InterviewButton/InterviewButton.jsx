import { Button } from "@mui/material";
import React from "react";

const InterviewButton = (props) => {
  const { job, deleteJobListing, addInterviewingJob } = props;
  const jobToAdd = {
    company_name: job.company_name,
    job_title: job.job_title,
    job_description: job.job_description,
    job_listing_url: job.job_listing_url,
    salary_range: job.salary_range,
    office_policy: job.office_policy,
    job_location: job.job_location,
    date_applied: job.date_applied,
    interview_type: "HR/Recruiter",
  };
  const jobToDelete = job.id;

  const handleClick = () => {
    addInterviewingJob(jobToAdd);
    deleteJobListing(jobToDelete);
  };

  return (
    <>
      <Button variant="contained" sx={{ mb: 2 }} onClick={handleClick}>
        Interviewing
      </Button>
    </>
  );
};

export default InterviewButton;
