import { Routes, Route } from "react-router-dom";

// Components imports
import NarBar from "./components/NavBar/NavBar";

// Page imports
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <NarBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
