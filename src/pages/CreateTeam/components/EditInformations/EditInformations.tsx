import React from 'react';
import './EditInformations.scss';

const EditInformations = () => {
  return (
    <div className="edit-information">
      <h2>Team Information</h2>
      <div className="column">
        <div className="block">
            <label htmlFor="">Team name</label>
            <input type="text" id="name" name="name" placeholder="Insert team name"/>
        </div>

        <div className="block">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" />
        </div>
      </div>
      <div className="column">
        <div className="block">
          <label htmlFor="">Team website</label>
          <input type="url" pattern="https://.*" id="url" name="url" placeholder="http:/myteam.com"/>
        </div> 

        <div className="block">
          <label>Team Type</label>
          <div>
            <div className="checkbox">
              <input type="radio" id="real" name="type" value="real" />
              <label htmlFor="real">Real</label>
            </div>
            <div className="checkbox">
              <input type="radio" id="virtual" name="type" value="virtual" />
              <label htmlFor="virtual">Virtual</label>
            </div>
          </div>
        </div>
        <div className="block">
          <label htmlFor="tags">Tags</label>
          <textarea name="tags" id="tags" />
        </div>
      </div>
    </div>
  );
}

export default EditInformations;