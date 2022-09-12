import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Main from './components/Main';
import Contacts from './components/Contacts';
import About from './components/About'
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const routes = [{
    name: 'Main',
    path: '/',
  }, {
    name: 'Contacts',
    path: '/Contacts',
  }, {
    name: 'About',
    path: '/About',
  }, {
    name: 'Error',
    path: '/Error',
  }]
  const links = routes.map(({ name, path }) => (
    <Link key={name} to={path} style={{textDecoration:"none"}}>
      {name}
    </Link>
  ));
  return (
    <div className="App">
            <h3>App</h3>
            <nav style={{
                justifyContent: "space-around",
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
                backgroundColor: "yellow",
              }}>
                {links}
            </nav>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="/About" element={<About />} />
                <Route path="/Error" element={<Error />} />
              </Routes>
              <Footer />
    </div>
  );
}
export default App;
