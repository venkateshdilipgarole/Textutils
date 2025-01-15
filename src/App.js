import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutSec="About" />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" />} />
        <Route path="/home" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </> 
  );
}

export default App;