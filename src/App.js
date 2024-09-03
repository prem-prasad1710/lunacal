import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Recommended from './components/Recommended';
import Gallery from './components/Gallery';

function App() {
  const [activeTab, setActiveTab] = useState('aboutMe');

  const getButtonStyle = (tabName) => ({
    transform: activeTab === tabName ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.2s',
  });

  return (
    <div className="container">
      <div className="app">
        <div className="prem">
          <div className="content">
            <div className="tabs">
              <button
                onClick={() => setActiveTab('aboutMe')}
                style={getButtonStyle('aboutMe')}
              >
                About Me
              </button>
              <button
                onClick={() => setActiveTab('experiences')}
                style={getButtonStyle('experiences')}
              >
                Experiences
              </button>
              <button
                onClick={() => setActiveTab('recommended')}
                style={getButtonStyle('recommended')}
              >
                Recommended
              </button>
            </div>
            {activeTab === 'aboutMe' && <AboutMe />}
            {activeTab === 'experiences' && <Experiences />}
            {activeTab === 'recommended' && <Recommended />}
          </div>
        </div>
        <Gallery />
      </div>
    </div>
  );
}

export default App;