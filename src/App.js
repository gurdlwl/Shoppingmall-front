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
          <li><Link to='/'>Service Center</Link></li>
          <li><Link to='/'>Cart</Link></li>
          <li><Link to='/'>Delivery</Link></li>
          <li><Link to='/'>Mileage</Link></li>
          <li><Link to='/'>Use Info</Link></li>
        </ul>

        <div id='title'><Link to='/'>Shopping mall</Link></div>
        <input type="text" placeholder="Search"/>
        <hr/>

        <div id='mainImage'>
          <img src="" alt=""/>
        </div>
      </header>

      <section className='app-body'>
        <Route path='/' exact component={Home} />
        <Route path='/userPage' exact component={Index} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register}/>
      </section>

      <aside className='left-aside'>

      </aside>

      <footer className='app-footer'>
        <ul className='menu-bar'>
          <li><Link>Home</Link></li>
          <li> | </li>
          <li><Link>Terms of Service</Link></li>
          <li> | </li>
          <li><Link>User Info Management</Link></li>
          <li> | </li>
          <li><Link>Use Info</Link></li>
          <li> | </li>
          <li><Link>Service Center</Link></li>
        </ul>

        <div>
          Copyright 2019 @. All rights reserved.
        </div>
      </footer>
    </BrowserRouter>
  </Provider>
);

export default App;
