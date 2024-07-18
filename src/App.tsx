import React, { useMemo } from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import style from './App.module.css';

import '@app-velocity/<ADD-YOUR-PACKAGE-ID-HERE>/common-styles.css';
import '@app-velocity/<ADD-YOUR-PACKAGE-ID-HERE>/common-styles-var.css';

// import { variables } from '@app-velocity/<ADD-YOUR-PACKAGE-ID-HERE>/variables';
// import { playgroundColorVariable } from '@app-velocity/<ADD-YOUR-PACKAGE-ID-HERE>/index';

// ---- comment following block when using import from published package ------
const playgroundColorVariable = '#fff';
const variables = {
  playgroundCollection: {
    Mode1: {
      playgroundColorVariable: '',
      playgroundNumberVariable: '',
      playgroundTextVariable: '',
      playgroundBooleanVariable: '',
    }
  }
};
// ----------------------------------------------------------------------------

function App() {
  const [value, setValue] = React.useState<number>(0);

  console.log('Variables', variables);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return useMemo(() => (
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
        <>
          <div className={style.row}>
            <div>--playground-color-style-background:</div>
            <div
              className={style.square}
              style={{
                backgroundColor: `var(--playground-color-style-background)`
              }}
            />
          </div>

          <div className={style.row}>
            <div>--content-dark-background:</div>
            <div
              className={style.square}
              style={{
                backgroundColor: `var(--content-dark-background)`
              }}
            />
          </div>

          <div className={style.row}>
            <div>--dark-grey-04-background:</div>
            <div
              className={style.square}
              style={{
                backgroundColor: `var(--dark-grey-04-background)`
              }}
            />
          </div>

          <div className={style.row}>
            <div>--general-black-111111-background:</div>
            <div
              className={style.square}
              style={{
                backgroundColor: `var(--general-black-111111-background)`
              }}
            />
          </div>

          <div className={style.row}>
            <div>className="playground-text-style":</div>
            <div className="playground-text-style">
              The quick brown fox jumps over the lazy dog
            </div>
          </div>

          <div className={style.row}>
            <div>.playground-effect-style:</div>
            <div className="effect_preview_image">
              <div className="effect_preview_bg_1"></div>
              <div className="effect_preview_bg_2"></div>
              <div className="effect_preview_bg_3"></div>
              <div className={`effect_component .playground-effect-style`}></div>
            </div>
          </div>
        </>
      ) : null}



      {/* JS part */}



      {value === 1 ? (
        <>
          <div className={style.row}>
            <div>CommonStyles?.colors?['contentDark.background']</div>
            <div
              className={style.square}
              style={{
                backgroundColor: `${playgroundColorVariable}`
              }}
            />
          </div>

          <div className={style.row}>
            <div>variables?.playgroundCollection?.Mode1?.playgroundNumberVariable</div>
            <div>{variables?.playgroundCollection?.Mode1?.playgroundNumberVariable}</div>
          </div>

          <div className={style.row}>
            <div>variables?.playgroundCollection?.Mode1?.playgroundTextVariable</div>
            <div>{variables?.playgroundCollection?.Mode1?.playgroundTextVariable}</div>
          </div>

          <div className={style.row}>
            <div>variables?.playgroundCollection?.Mode1?.playgroundBooleanVariable</div>
            <div>{variables?.playgroundCollection?.Mode1?.playgroundBooleanVariable ? 'true' : 'false'}</div>
          </div>
        </>
      ) : null}
    </div>
  ), [value]);
}

export default App;
