import React from 'react';

function Loading() {
  window.scrollTo({ top: 0 });
  return (
    <div className="loading">
      <span>Loading...</span>
      <div className="progress">
        <div className="color" />
      </div>
    </div>
  );
}

export default Loading;
