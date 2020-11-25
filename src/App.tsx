import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CreateTeam from './pages/CreateTeam/CreateTeam';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Route component={LandingPage} path="/" exact />
        <Route component={CreateTeam} path="/create-team" />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
