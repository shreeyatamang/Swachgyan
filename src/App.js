import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./componenets/Navbar/Navbar";
import Intro from  './componenets/Intro/intro';
import Games from './componenets/Games/Games';
import Quizzes from './componenets/Quizes/Quizes';
import Aboutus from './componenets/Aboutus/Aboutus';
import Contact from './componenets/Contact/Contact';
import SelectChoice from './componenets/SelectChoice/SelectChoice';
import KidsClub from './componenets/KidsClub/KidsClub';
import SignUp from './componenets/SignUp/SignUp'; 
import Login from './componenets/LogIn/LogIn';


function App (){
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/KidsClub" element={<KidsClub />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
     <Intro/>
      <Aboutus />
      <SelectChoice/>
    
      {/* <Games />
      <Quizzes /> */}
      <Contact />
      
    </>
  );
}


export default App;











