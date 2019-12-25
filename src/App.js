import React , { Component }from 'react';
import {BrowserRouter , Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Index from './components/Index'

class App extends Component {
  render(){
    return (
    
    <BrowserRouter>
    <NavBar/>
    <Route exact path='/' component={Index} />
    <Route path='/Contact' component={Contact} />


    </BrowserRouter>
  )};
}

export default App ;