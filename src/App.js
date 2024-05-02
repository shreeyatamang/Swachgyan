import Navbar from "./componenets/Navbar/Navbar";
import Intro from  './componenets/Intro/intro'; 
import Games from './componenets/Games/Games';
import React, { useState } from 'react';




function App (){
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Games/>
    </div>
  );
}

export default App;
