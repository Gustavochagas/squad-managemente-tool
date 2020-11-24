import React from 'react';
import Card from '../../components/Card/Card';
import MostPicked from './components/MostPicked/MostPicked';
import Table from './components/Table/Table';
import TopPlayers from './components/TopPlayers/TopPlayers';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="cards">
        <div className="card-item one">
          <Card title="My teams" action>
            <Table />
          </Card>
        </div>
        <div className="card-item two">
          <Card title="Top 5">
            <TopPlayers />
          </Card>
        </div>
        <div className="card-item three">
          <Card>
            <MostPicked />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LandingPage;