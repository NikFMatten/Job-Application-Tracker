import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components imports
import NarBar from "./components/NavBar/NavBar";

// Page imports
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    getJobListings();
  }, []);

  const getJobListings = async () => {
    try {
      const response = await axios.get("http://localhost:8000/jobs/");
      setJobListings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NarBar />
      <Routes>
        <Route path="/" element={<HomePage jobListings={jobListings} />} />
      </Routes>
    </div>
  );
}

export default App;
