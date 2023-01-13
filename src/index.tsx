import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import './index.scss';

import { Home } from './pages/home/Home';
import { Projects } from './pages/projects/Projects';
import { Scene } from './common/components/Geometry/Scene/Scene';
import { Navbar } from './common/components/Navbar/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='outer-container'>
      <Navbar/>
      <Scene />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);