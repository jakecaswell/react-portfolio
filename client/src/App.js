import logo from './logo.svg';
import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Nav from './components/Nav';

function App() {
  const [tabs] = useState([
    {
      name: 'About Me'
    }, 
    {
      name: 'My Projects'
    }, 
    {
      name: 'Contact Me'
    }, 
  ])

  const [currentTab, setCurrentTab] = useState('About Me');

  return (
    <div className="App">
      <Nav
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Nav>
      <main>
        {
          currentTab === 'About Me' &&
          <About></About>
        }
        
      </main>
    </div>
  );
}

export default App;
