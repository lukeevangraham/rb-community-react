import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home"
import EventTop from "./components/EventTop"
import HomeAbout from "./components/HomeAbout"
import HomeSermons from './components/HomeSermons';
import HomeMission from './components/HomeMission'

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Home />
      <EventTop />
      <HomeAbout />
      <HomeSermons />
      <HomeMission />
    </div>
  );
}

export default App;
