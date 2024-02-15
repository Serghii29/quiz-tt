import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => (
  <main>
    <Outlet />
  </main>
);
