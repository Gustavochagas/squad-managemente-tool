import React from 'react';
import Card from '../../components/Card/Card';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Card title="My teams" action>
        <table className="table-teams">
          <thead>
            <tr className="table-header">
              <th className="table-header__item">Name</th>
              <th className="table-header__item">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-body">
              <td className="table-body__item">Barcelona</td>
              <td className="table-body__item">Barcelona Squad</td>
            </tr>
            <tr className="table-body">
              <td className="table-body__item">Barcelona</td>
              <td className="table-body__item">Barcelona Squad</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  )
}

export default LandingPage;