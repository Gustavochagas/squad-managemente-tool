import React from 'react';
import Card from '../../components/Card/Card';
import EditInformations from './components/EditInformations/EditInformations';
import './CreateTeam.scss';

const CreateTeam = () => {
  return (
    <div className="create-team">
      <Card title="Create your team">
        <EditInformations />
      </Card>
    </div>
  );
}

export default CreateTeam;