import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Details from "./pages/details";
import Dashboard from "./pages/dashboard";
import AddCandidate from "./pages/addCandidate";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/add-candidate" element={<AddCandidate />} />
    </Routes>
  );
}

export default App;
