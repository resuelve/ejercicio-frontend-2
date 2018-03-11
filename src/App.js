import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green900 } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';

import initialEmployees from './employees';
import EmployeeTable from './EmployeeTable';
import Toolbar from './Toolbar';
import ClientForm from './ClientForm';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green900
  }
});

class App extends Component {
  state = {
    employees: initialEmployees,
    currency: 'mxn',
    change: 21.5,
    openDialog: undefined,
    query: '',
    employee: undefined
  };

  deleteRow(rowId) {
    const { employees } = this.state;
    const toDelete = employees.find(({ id }) => id === rowId);
    if (toDelete) {
      const index = employees.indexOf(toDelete);
      this.setState({
        employees: [...employees.slice(0, index), ...employees.slice(index + 1)]
      });
    } else {
      console.error(rowId);
    }
  }

  updateRow(employee) {
    const { employees } = this.state;
    const toDelete = employees.find(({ id }) => id === employee.id);
    if (toDelete) {
      const index = employees.indexOf(toDelete);
      return [
        ...employees.slice(0, index),
        employee,
        ...employees.slice(index + 1)
      ];
    } else {
      console.error(employee);
      return employees;
    }
  }

  addRow(employee, employees) {
    const id =
      employees.reduce((prev, { id }) => Math.max(prev, Number(id)), -1) + 1;
    return [...employees, { ...employee, id }];
  }

  render() {
    const { currency, openDialog, employees } = this.state;
    const newCurrency = currency === 'mxn' ? 'usd' : 'mxn';

    const actions = [
      <div
        className="primaryButton"
        onClick={() =>
          this.setState({ openDialog: undefined, employee: undefined })
        }
      >
        CANCEL
      </div>,
      <div
        className="primaryButton"
        onClick={() => {
          const { employee, employees, openDialog } = this.state;
          this.setState({
            openDialog: undefined,
            employee: undefined,
            employees:
              openDialog === 'add'
                ? this.addRow(employee, employees)
                : this.updateRow(employee)
          });
        }}
      >
        SUBMIT
      </div>
    ];
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Toolbar
            {...this.state}
            changeQuery={(query) => this.setState({ query })}
            changeCurrency={() => this.setState({ currency: newCurrency })}
            addElement={() => this.setState({ openDialog: 'add' })}
          />

          <EmployeeTable
            {...this.state}
            deleteRow={this.deleteRow.bind(this)}
            updateRow={(rowId) => {
              const employee = employees.find(({ id }) => id === rowId);
              this.setState({ openDialog: String(rowId), employee });
            }}
          />

          <Dialog
            title={openDialog === 'add' ? 'Add an employee' : 'Update employee'}
            actions={actions}
            modal={true}
            open={!!openDialog}
          >
            <ClientForm
              {...this.state}
              changeClient={(employee) => this.setState({ employee })}
            />
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
