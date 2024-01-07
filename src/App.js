import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./MyContext"; // Import your context provider
import FAQ from "./Navbar/Faq";
import ContactUs from "./Navbar/ContactUs";
import AboutUs from "./Navbar/AboutUs/AboutUs";
import RegisterUser from "./Navbar/RegisterUser";
<<<<<<< HEAD
import Login from "./Navbar/Login";
=======
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
import NavBar from "./Navbar/Navbar";
import HomePage from "./Home/HomePage";

function App() {
  return (
    <Fragment>
      <Router>
        <MyContextProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
<<<<<<< HEAD
            {/* <Route path="/boys" element={<Boys/>} />
        <Route path="/girls" element={<Girls/>} /> */}
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/Login" element={<Login/>} />
=======
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/register" element={<RegisterUser />} />
            {/* <Route path="/sign-in" element={<SignIn/>} /> */}
>>>>>>> f47d33857fd80ba8c97e8d47a2779dd538520f0c
          </Routes>
        </MyContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;
