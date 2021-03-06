import React from 'react';
import Home from "./components/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FAQs from './components/FAQs';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
          <Switch>
            <Route path='/' exact component={ () => <Home /> } />
            <Route path = '/FAQs' component={ () => <FAQs /> } />
            <Route path ='/contact' exact component={ () => <Contact /> } />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

