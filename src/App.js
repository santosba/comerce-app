import React from 'react';
import HomePage from './pages/homepage/homepage.component';

import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';

import {Route, Switch} from 'react-router-dom';

import './App.css';

/* const hatsPage = ()=>(
  <div>
  <h1> Hats Page</h1>
  </div>
) */

function App() {
  return (
   <div>
<Header/>
<Switch>
  <Route  exact  path='/' component={HomePage} />
  <Route  path='/shop' component={ShopPage} />
</Switch>
  
   </div>
   // <HomePage/>
  );
}

export default App;
