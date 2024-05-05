import Navbar from "./componenets/Navbar/Navbar";
import Intro from  './componenets/Intro/intro'; 
import Games from './componenets/Games/Games';
import Quizes from './componenets/Quizes/Quizes';

import React, { useState } from 'react';




function App (){
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Games/>
      <Quizes/>
   
    </div>
  );
}

export default App;
