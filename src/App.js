import Navbar from "./componenets/Navbar/Navbar";
import Intro from  './componenets/Intro/intro'; 
import Games from './componenets/Games/Games';
import Quizes from './componenets/Quizes/Quizes'; 
import Aboutus from './componenets/Aboutus/Aboutus'; 
import Contact from './componenets/Contact/Contact'; 

function App (){
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Aboutus/> 
      <Games/>
      <Quizes/> 
      
      <Contact/>
    
      
    </div>
  );
}
export default App; 

