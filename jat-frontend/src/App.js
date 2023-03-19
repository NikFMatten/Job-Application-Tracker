import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components imports
import NarBar from "./components/NavBar/NavBar";

// Page imports
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [jobListings, setJobListings] = useState([]);
  const [archivedJobs, setArchivedJobs] = useState([]);

  useEffect(() => {
    getJobListings();
    getArchivedJobs();
  }, []);

  const getJobListings = async () => {
    try {
      const response = await axios.get("http://localhost:8000/jobs/");
      setJobListings(response.data);
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

  return (
    <div>
      <NarBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              jobListings={jobListings}
              archivedJobs={archivedJobs}
              deleteJobListing={deleteJobListing}
              addNewArchivedJob={addNewArchivedJob}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
