import React from 'react';
import { FiPlus } from 'react-icons/fi';
import './Card.scss';

interface ICard {
  title: string;
  action?: boolean;
  children?: any;
}

const Card = ({ title, action, children } : ICard) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{title}</h2>
        {action && 
          <div className="card-action">
            <a href=" " className="card-action-link">
              <FiPlus size={25} />
            </a>
          </div>
        }
      </div>
      {children &&
        <div className="card-body">
          {children}
        </div>
      }
    </div>
  )
}

export default Card;