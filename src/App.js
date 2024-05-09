import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./componenets/Navbar/Navbar";
import Intro from  './componenets/Intro/intro'; 
import Games from './componenets/Games/Games';
import Quizzes from './componenets/Quizes/Quizes'; 
import Aboutus from './componenets/Aboutus/Aboutus'; 
import Contact from './componenets/Contact/Contact'; 

function App (){
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/games" element={<Games />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;


