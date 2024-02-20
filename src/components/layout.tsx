import React from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/layout.styles.scss';

export const Layout: React.FC = React.memo(() => (
  <main className="layout">
    <Outlet />
  </main>
));
