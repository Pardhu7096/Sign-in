import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SignInT from './Components/signIn';
import HomeT from './Components/Home';

import './App.css';

function App() {
return (
  <div>
<BrowserRouter>
<Navbar/>
  <Switch>
    <Route path='/SignIn' exact component={SignInT} />
    <Route path='/Home' exact component={HomeT} />

  </Switch>
</BrowserRouter>
  </div>
)
};
export default App;
