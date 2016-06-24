import React from 'react';

export default function LatestPrinted() {
  return (
    <div className="latest-printed">
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  LatestPrinted.propTypes = {
  };
}
