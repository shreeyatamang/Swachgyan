import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import Navbar from "./components/Navbar/Navbar";
import Intro from './components/Intro/Intro'; 
import Games from './components/Games/Games';
import Quizzes from './components/Quizzes/Quizzes'; 
import AboutUs from './components/AboutUs/AboutUs'; 
import Contact from './components/Contact/Contact'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/games" element={<Games />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




