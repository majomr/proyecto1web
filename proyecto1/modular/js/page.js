import React, { useState, useEffect} from 'react';
import './page.css'
import TopBar from './TopBar.js'
import Cartelera1 from './Cartelera1.js'
import Bar from './Bar.js'
import Cartelera2 from './Cartelera2.js'
import BottomBar from './BottomBar.js'
import './page.css'

const App = () => {
  return (
    <div className='page'>
      <TopBar/>
      <Cartelera1></Cartelera1>
      <Bar></Bar>
      <Cartelera2></Cartelera2>
      <BottomBar></BottomBar> 
    </div>
  );
};

export default App;
