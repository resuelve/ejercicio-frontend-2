import React from 'react';

import { format } from 'currency-formatter';

import IconButton from 'material-ui/IconButton';
import UpdateIcon from 'material-ui/svg-icons/editor/mode-edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

const currencyFormat = (value, currency = 'mxn', change = 21.5) => {
  const val = currency === 'mxn' ? value : value / change;
  return `$ ${format(val, {})}`;
};

const EmployeeTable = ({
  employees,
  query,
  currency,
  change,
  updateRow,
  deleteRow
}) => {
  const head = ['id', 'name', 'company', 'salary', 'age', 'phone', 'email'];
  const filteredEmployees = employees
    .filter(
      ({ name, company }) =>
        name.toLowerCase().includes(query.toLowerCase()) ||
        company.toLowerCase().includes(query.toLowerCase())
    )
    .map((employee) => {
      const { id } = employee;
      return (
        <tr key={id}>
          {head.map((key) => {
            if (key === 'salary') {
              const color = Number(employee.salary) < 10000 ? 'red' : 'green';
              const className = `table-salary salary-${color}`;
              return (
                <td key={key} className={className}>
                  {currencyFormat(employee.salary, currency, change)}
                </td>
              );
            } else {
              return <td key={key}>{employee[key]}</td>;
            }
          })}
          <td key="update">
            <IconButton onClick={() => updateRow(id)}>
              <UpdateIcon />
            </IconButton>
          </td>
          <td key="delete">
            <IconButton onClick={() => deleteRow(id)}>
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
      );
    });

  return (
    <table>
      {/* Header */}
      <thead>
        <tr>
          {head.map((val) => <th key={val}>{val.toUpperCase()}</th>)}
          <th>UPDATE</th>
          <th>DELETE</th>
        </tr>
      </thead>

      {/* Body */}
      <tbody>{filteredEmployees}</tbody>
    </table>
  );
};

export default EmployeeTable;
