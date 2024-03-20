import React from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// import './temporary.css';

import style from './App.module.css';

const items = [{
    text: 'actionPrimaryActive',
    varName: '--light-theme-mode-1-action-primary-active',
  }, {
      text: 'actionPrimaryHover',
      varName: '--light-theme-mode-1-action-primary-hover',
  },{
    text: 'actionSecondaryDefault',
    varName: '--light-theme-mode-1-action-secondary-default',
  }, {
    text: 'actionSecondaryHover',
    varName: '--light-theme-mode-1-action-secondary-hover',
  }
];

function App() {
  return (
      <div className={style.root}>
        <Grid container spacing={2} sx={{ flexWrap: 'nowrap' }}>
          <Grid item xs={6} className={style.grid}>
            <h2>Variables preview</h2>
            {items.map(
                ({ text, varName }) => (
                <div className={style.row}>
                  <div
                    className={style.square}
                    style={{
                      backgroundColor: `var(${varName})`
                    }}
                  />
                  <span>{text}</span>
                </div>
              )
            )}
          </Grid>
          <Grid item xs={6} className={style.grid}>
            <h2>Components</h2>
            <Button className={style.primary_button} variant="contained">Button Primary</Button>
            <Button className={style.secondary_button} variant="contained">Button Secondary</Button>
          </Grid>
        </Grid>
      </div>
  );
}

export default App;
