import React from 'react';
import {Outlet} from 'react-router-dom';

const Default: React.FC = () => {
  return (
    <>
    <h1>**ヘッダー**</h1>
    <Outlet />
    <h1>**フッダー**</h1>
    
    </>
  );
};

export default Default;