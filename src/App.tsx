import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Header } from './partials/header2';
import { Footer } from './partials/footer';
import { Cystoscope } from './pages/projects/cystoscope';
import { Ventilator } from './pages/projects/ventilator'
import { Tengeru } from './pages/projects/tengeru';
import { Warmer_DP } from './pages/projects/warmer_DP'; 
import { Faceshields } from './pages/projects/faceshields';
import { EEGcircuitPage} from './pages/projects/EEGcircuit';
import { JustForFun } from './pages/projects/justforfun';
import { Routes } from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={Routes.homepage}>
            <Redirect to={Routes.home} />
          </Route>
          <Route path={Routes.home} exact>
            <Header/>
            <Home/>
            <Footer/>
          </Route>
          <Route path={Routes.projects}>
            <Header/>
            <Projects/>
            <Footer/>
          </Route> 
          <Route path={Routes.cystoscope}>
            <Header/>
            <Cystoscope/>
            <Footer/>
          </Route>
          <Route path={Routes.ventilator}>
            <Header/>
            <Ventilator/>
            <Footer/>
          </Route>
          <Route path={Routes.tengeru}>
            <Header/>
            <Tengeru/>
            <Footer/>
          </Route>
          <Route path={Routes.warmer_DP}>
              <Header/>
              <Warmer_DP/>
              <Footer/>
          </Route>
          <Route path={Routes.faceshields}>
              <Header/>
              <Faceshields/>
              <Footer/>
          </Route>
          <Route path={Routes.EEGcircuit}>
              <Header/>
              <EEGcircuitPage/>
              <Footer/>
          </Route>
          <Route path={Routes.justforfun}>
              <Header/>
              <JustForFun/>
              {/* <Footer/> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;