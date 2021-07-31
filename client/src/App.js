import React from 'react';
import Navbar from './component/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Add from './component/Add';
import Edit from './component/Edit'
import Error from './component/Error'
import './App.css';

const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/add" component={Add}/>
      <Route exact path ="/edit/:id" component={Edit}/>
      <Route component={Error} />
     
    </Switch>
    
     

    </>
  )
}

export default App;



