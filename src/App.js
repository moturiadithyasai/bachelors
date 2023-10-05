import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup"
import Signin from "./components/Signin";
import "./styles/Header.css";
import "./styles/Signup.css";
import "./styles/Signin.css";

function App() {
    return(
      <Router>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </Router>
    );
    }
    

export default App;
