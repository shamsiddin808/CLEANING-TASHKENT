import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useEffect, useState } from 'react';
import Services from './components/Home/Services/Services';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import ServiceContainer from './components/ServiceContainer/ServiceContainer';
import NoMatch from './components/NoMatch/NoMatch';
import General_clearing from './components/ServiceTips/General_clearing';
import Wet from './components/ServicesWet/Wet'
import RoboClean from './components/RoboClean/RoboClean'
import Another from './components/Another/Another'


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState('');

  //console.log('app', loggedInUser.email, isAdmin);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <ServiceContainer></ServiceContainer>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/general_cleaning'>
            <General_clearing/>
          </Route>
          <Route path='/wet_cleaning'>
            <Wet/>
          </Route>
          <Route path='/another_cleaning'>
            <Another/>
          </Route>
          <Route path='/robo_cleaning'>
            <RoboClean/>
          </Route>
          <Route path='/*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
