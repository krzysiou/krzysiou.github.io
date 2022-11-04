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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);