import React from 'react';
import HomePage from './pages/homepage/homepage.component';

import {Route} from 'react-router-dom';

import './App.css';

const hatsPage = ()=>(
  <div>
  <h1> Hats Page</h1>
  </div>
)

function App() {
  return (
   <div>

  <Route  exact  path='/' component={HomePage} />
  <Route  path='/hats' component={hatsPage} />

  
   </div>
   // <HomePage/>
  );
}

export default App;
