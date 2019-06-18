import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Provider} from "mobx-react"

import './App.scss';

import Home from './Main'
import Index from './User/index'
import Login from './User/login'
import Register from './User/register'
import Stores from './Stores'

const App = () => (
  <Provider stores={Stores}>
    <BrowserRouter>
      <header className='app-header'>
        <ul className='menu-bar'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/userPage'>User Page</Link></li>
        </ul>
      </header>

      <section className='app-body'>
        <Route path='/' exact component={Home} />
        <Route path='/userPage' exact component={Index} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register}/>
      </section>
    </BrowserRouter>
  </Provider>
);

export default App;
