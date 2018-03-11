import React from 'react';

import TextField from 'material-ui/TextField';

const ClientForm = ({ openDialog, employee = {}, changeClient }) => {
  const keys = ['name', 'company', 'salary', 'age', 'phone', 'email'];
  const style = { marginRight: '20px' };

  if (openDialog === 'add') {
    return keys.map((key) => (
      <TextField
        key={key}
        style={style}
        floatingLabelText={key}
        onChange={(_, val) => changeClient({ ...employee, [key]: val })}
        value={employee[key]}
      />
    ));
  } else {
    return keys.map((key) => (
      <TextField
        key={key}
        style={style}
        disabled={key === 'name'}
        floatingLabelText={key}
        onChange={(_, val) => changeClient({ ...employee, [key]: val })}
        value={employee[key]}
      />
    ));
  }
};

export default ClientForm;
