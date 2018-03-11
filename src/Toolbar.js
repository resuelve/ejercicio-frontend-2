import React from 'react';

import TextField from 'material-ui/TextField';

const Toolbar = ({
  query,
  currency,
  employees,
  changeQuery,
  changeCurrency,
  addElement
}) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <TextField
        floatingLabelText="Search"
        onChange={(_, val) => changeQuery(val)}
        value={query}
      />
      <div className="primaryButton" onClick={addElement}>
        ADD EMPLOYEE
      </div>
      <div className="primaryButton" onClick={changeCurrency}>
        {currency.toUpperCase()}
      </div>
      <div className="primaryButton" onClick={() => console.log(employees)}>
        PRINT IN CONSOLE
      </div>
    </div>
  );
};

export default Toolbar;
