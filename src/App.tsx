import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Header } from './partials/header';
import { Cystoscope } from './pages/projects/cystoscope';
import { Routes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path={'/'} exact>
          <Header/>
          <Home/>
        </Route>
        <Route path={Routes.homepage}>
          <Redirect to={Routes.home} />
        </Route>
        <Route path={Routes.home} exact>
          <Header/>
          <Home/>
        </Route>
        <Route path={Routes.projects}>
          <Header/>
          <Projects/>
         </Route> 
        <Route path={Routes.cystoscope}>
          <Header/>
          <Cystoscope/>
        </Route>
      </div>
    </Router>
  );
}

export default App;