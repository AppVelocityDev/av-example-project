import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import style from './App.module.css';
// import '@app-velocity/test-new-templates-dev/style.css';
// import '@app-velocity/demo-seventh-may/style.css';
import '@app-velocity/nineth-may-test/style.css';

// @ts-ignore
import { Variables, CommonStyles } from '@app-velocity/nineth-may-test';
// import { VariablesLogger, StylesLogger, Variables, CommonStyles } from '@app-velocity/test-new-templates-dev/main.js';
// import { VariablesLogger, StylesLogger, Variables, CommonStyles } from '@app-velocity/demo-seventh-may/main.js';

import { colors } from './configs/colors';
import { typography } from './configs/typography';
import { effects } from './configs/effects';
import { sizing } from './configs/sizing';

import { colors as colors2 } from './configs/colorsJS';
import { typography as typography2 } from './configs/typographyJS';
import { effects as effects2 } from './configs/effectsJS';
import { sizing as sizing2 } from './configs/sizingJS';

// VariablesLogger.logVariables();
// StylesLogger.logStyles();

function App() {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={style.root}>
      <h2>Variables preview</h2>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Basic tabs example"
        >
          <Tab label="CSS" />
          <Tab label="JS" />
        </Tabs>
        {value === 0 ? (
        <Grid container>
          {colors.map(
            ({ text, varName }) => (
              <Grid item xs={3} className={style.grid}>
                <div className={style.row}>
                  <div>{text}:</div>
                  <div
                    className={style.square}
                    style={{
                      backgroundColor: `var(${varName})`
                    }}
                  />
                </div>
              </Grid>)
            )}
          {typography.map(
            ({ text, varName }) => (
              <Grid item xs={12} className={style.grid}>
                <div className={style.row}>
                  <div>{text}:</div>
                  <div className={varName}>
                    The quick brown fox jumps over the lazy dog
                  </div>
                </div>
              </Grid>)
            )}
            {effects.map(
            ({ text, varName }) => (
              <Grid item xs={4} className={style.grid}>
                <div className={style.row}>
                  <div>{text}:</div>
                  <div className="effect_preview_image">
                    <div className="effect_preview_bg_1"></div>
                    <div className="effect_preview_bg_2"></div>
                    <div className="effect_preview_bg_3"></div>
                    <div className={`effect_component ${varName}`}></div>
                  </div>
                </div>
              </Grid>)
            )}
            {sizing.radius.map(
                ({ text, varName }) => (
                    <Grid item xs={4} className={style.grid}>
                      <div className={style.row}>
                        <div>{text}:</div>
                        <div className="effect_preview_image"
                           style={{
                             width: '50px',
                             height: '50px',
                             backgroundColor: '#a7adbc',
                             borderRadius: `calc(var(${varName}) * 1px)`,
                             boxSizing: 'border-box'
                           }}
                        />
                      </div>
                    </Grid>)
            )}
          {sizing.paddings.map(
            ({ text, varName }) => (
              <Grid item xs={3} className={style.grid}>
                <div className={style.row}>
                  <div>{text}:</div>
                  <div
                    style={{
                      width: '200px',
                      height: '200px',
                      backgroundColor: '#a7adbc',
                      padding: `calc(var(${varName}) * 1px)`,
                      boxSizing: 'border-box'
                    }}
                  >
                    <div style={{
                      backgroundColor: '#000',
                      height: '100%'
                    }}></div>
                  </div>
                </div>
              </Grid>)
            )}
        </Grid>
        ) : null}



        {/* JS part */}



        {value === 1 ? (
        <Grid container>
          {colors2.map(
            ({ text, varName }) => (
              <Grid item xs={3} className={style.grid}>
                <div className={style.row}>
                  <div>{`colors.LightMode[${varName}]`}:</div>
                  <div
                      className={style.square}
                      style={{
                        backgroundColor: `${Variables?.variables?.colors?.LightMode[varName]}`
                      }}
                  />
                </div>
                <div className={style.row}>
                  <div>{`colors.DarkMode[${varName}]`}:</div>
                  <div
                      className={style.square}
                      style={{
                        backgroundColor: `${Variables?.variables?.colors?.DarkMode[varName]}`
                      }}
                  />
                </div>
              </Grid>)
            )}
          {typography2.map(
              ({ text, varName }) => (
                  <Grid item xs={12} className={style.grid}>
                    <div className={style.row}>
                      <div>{text}:</div>
                      <div style={{ ...(CommonStyles?.typography?.[varName]) }}>
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </div>
                  </Grid>)
          )}
          {effects2.map(
              ({ text, varName }) => (
                  <Grid item xs={4} className={style.grid}>
                    <div className={style.row}>
                      <div>{text}:</div>
                      <div className="effect_preview_image">
                        <div className="effect_preview_bg_1"></div>
                        <div className="effect_preview_bg_2"></div>
                        <div className="effect_preview_bg_3"></div>
                        <div className="effect_component" style={{ ...(CommonStyles?.effects?.[varName]) }}></div>
                      </div>
                    </div>
                  </Grid>)
          )}
          {sizing2.radius.map(
              ({ text, varName }) => (
                  <Grid item xs={4} className={style.grid}>
                    <div className={style.row}>
                      <div>{text}:</div>
                      <div className="effect_preview_image"
                           style={{
                             width: '50px',
                             height: '50px',
                             backgroundColor: '#a7adbc',
                             borderRadius: `calc(${Variables?.variables?.sizing?.Mode1[varName]} * 1px)`,
                             boxSizing: 'border-box'
                           }}
                      />
                    </div>
                  </Grid>)
          )}
          {sizing2.paddings.map(
              ({ text, varName }) => (
                  <Grid item xs={3} className={style.grid}>
                    <div className={style.row}>
                      <div>{text}:</div>
                      <div
                          style={{
                            width: '200px',
                            height: '200px',
                            backgroundColor: '#a7adbc',
                            padding: `calc(${Variables?.variables?.sizing?.Mode1[varName]} * 1px)`,
                            boxSizing: 'border-box'
                          }}
                      >
                        <div style={{
                          backgroundColor: '#000',
                          height: '100%'
                        }}></div>
                      </div>
                    </div>
                  </Grid>)
          )}
        </Grid>
        ): null}
      </div>
  );
}

export default App;
