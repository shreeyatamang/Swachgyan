import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./componenets/Navbar/Navbar";
import Intro from './componenets/Intro/Intro';
import Games from './componenets/Games/Games';
import Quizzes from './componenets/Quizes/Quizes';
import Aboutus from './componenets/Aboutus/Aboutus';
import Contact from './componenets/Contact/Contact';
import SelectChoice from './componenets/SelectChoice/SelectChoice';
import RecentWork from './componenets/RecentWork/RecentWork';
import KidsClub from './componenets/KidsClub/KidsClub';
import SignUp from './componenets/SignUp/SignUp'; 
import Login from './componenets/LogIn/LogIn';
import Footer from './componenets/Footer/Footer';
import Learnmore from './componenets/learnmore/Learnmore'; // Correct import

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/KidsClub" element={<KidsClub />} />
          <Route path="/learnmore" element={<Learnmore />} /> {/* Correct route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Intro />
      <Aboutus />
      <SelectChoice />
      <RecentWork />
    </>
  );
}

export default App;
