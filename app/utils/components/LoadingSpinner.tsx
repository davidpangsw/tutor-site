import React from 'react'
import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ClipLoader size={50} color={"#123abc"} loading={true} />
    </div>
  );
}

export default LoadingSpinner