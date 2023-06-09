import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components imports
import NarBar from "./components/NavBar/NavBar";

// Page imports
import HomePage from "./pages/HomePage/HomePage";
import ArchivePage from "./pages/ArchivePage";

function App() {
  const [jobListings, setJobListings] = useState([]);
  const [archivedJobs, setArchivedJobs] = useState([]);
  const [interviewingJobs, setInterviewingJobs] = useState([]);
  const [rejectedJobs, setRejectedJobs] = useState([]);

  useEffect(() => {
    getJobListings();
    getArchivedJobs();
    getInterviewingJobs();
    getRejectedJobs();
  }, []);

  const getJobListings = async () => {
    try {
      const response = await axios.get("http://localhost:8000/jobs/");
      setJobListings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addJobListing = async (newJob) => {
    try {
      console.log("api call newJob obj:", newJob);
      const response = await axios.post("http://localhost:8000/jobs/", newJob);
      if (response.status === 201) getJobListings();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJobListing = async (jobListingToDelete) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/jobs/${jobListingToDelete}/`
      );
      if (response.status === 204) getJobListings();
    } catch (error) {
      console.log(error);
    }
  };

  const editJobListing = async (jobId, updatedJob) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/jobs/${jobId}/`,
        updatedJob
      );
      if (response.status === 200) getJobListings();
    } catch (error) {
      console.log(error);
    }
  };

  const getArchivedJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/archived_jobs/");
      setArchivedJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addNewArchivedJob = async (newArchivedJob) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/archived_jobs/",
        newArchivedJob
      );
      if (response.status === 201) getArchivedJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArchivedJob = async (jobToDelete) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/archived_jobs/${jobToDelete}/`
      );
      if (response.status === 204) getArchivedJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const getInterviewingJobs = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/interviewing_jobs/"
      );
      setInterviewingJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addInterviewingJob = async (newInterviewingJob) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/interviewing_jobs/",
        newInterviewingJob
      );
      if (response.status === 201) getInterviewingJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteInterviewingJob = async (jobToDelete) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/interviewing_jobs/${jobToDelete}/`
      );
      if (response.status === 204) getInterviewingJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const getRejectedJobs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/rejected_jobs/");
      setRejectedJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addRejectedJob = async (jobToAdd) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/rejected_jobs/",
        jobToAdd
      );
      if (response.status === 201) getRejectedJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRejectedJob = async (jobToDelete) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/rejected_jobs/${jobToDelete}/`
      );
      if (response.status === 204) getRejectedJobs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NarBar addJobListing={addJobListing} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              jobListings={jobListings}
              addJobListing={addJobListing}
              archivedJobs={archivedJobs}
              deleteJobListing={deleteJobListing}
              addNewArchivedJob={addNewArchivedJob}
              deleteArchivedJob={deleteArchivedJob}
              interviewingJobs={interviewingJobs}
              addInterviewingJob={addInterviewingJob}
              deleteInterviewingJob={deleteInterviewingJob}
              rejectedJobs={rejectedJobs}
              addRejectedJob={addRejectedJob}
              deleteRejectedJob={deleteRejectedJob}
              editJobListing={editJobListing}
            />
          }
        />
        <Route
          path="/archive"
          element={
            <ArchivePage
              jobListings={jobListings}
              addJobListing={addJobListing}
              archivedJobs={archivedJobs}
              deleteJobListing={deleteJobListing}
              addNewArchivedJob={addNewArchivedJob}
              deleteArchivedJob={deleteArchivedJob}
              interviewingJobs={interviewingJobs}
              addInterviewingJob={addInterviewingJob}
              deleteInterviewingJob={deleteInterviewingJob}
              rejectedJobs={rejectedJobs}
              addRejectedJob={addRejectedJob}
              deleteRejectedJob={deleteRejectedJob}
              editJobListing={editJobListing}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
