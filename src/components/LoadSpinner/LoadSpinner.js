import React from 'react';
import { Oval } from 'react-loader-spinner';

function LoaderSpinner() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Oval height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
}

export default LoaderSpinner;