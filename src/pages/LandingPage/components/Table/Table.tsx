import React from 'react';
import { FiChevronDown, FiEdit2, FiTrash } from 'react-icons/fi';
import './Table.scss';

const Table = () => {
  return (
    <table className="table-teams">
      <thead>
        <tr className="table-header">
          <th className="table-header__item">
            Name 
            <FiChevronDown />
          </th>
          <th className="table-header__item">
            Description 
            <FiChevronDown />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-body">
          <td className="table-body__item">Barcelona</td>
          <td className="table-body__item">
            Barcelona Squad 
            <div className="table-body-action">
              <FiTrash className="table-action__item" title="Delete" />
              <FiEdit2 className="table-action__item" title="Edit" />
            </div>
          </td>
        </tr>
        <tr className="table-body">
          <td className="table-body__item">Barcelona</td>
          <td className="table-body__item">
            Barcelona Squad 
            <div className="table-body-action">
              <FiTrash className="table-action__item" title="Delete" />
              <FiEdit2 className="table-action__item" title="Edit" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;