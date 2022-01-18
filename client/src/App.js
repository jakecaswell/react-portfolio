import logo from './logo.svg';
import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Project from './pages/Projects';
import ContactForm from './pages/Contact';

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
        {
          currentTab === 'Projects' &&
          <Project></Project>
        }
        {
          currentTab === 'Contact Me' &&
          <ContactForm></ContactForm>
        }
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
