import "./App.css";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import SignIn from "./pages/SignIn";
import AllContentComponent from "./pages/Dashboard";
import ShareBrainPage from "./pages/ShareBrainPage";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/notes" element={<AllContentComponent />} />
          <Route path="/shared-brain/:brainId" element={<ShareBrainPage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
