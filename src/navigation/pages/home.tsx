import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../../components/button';
import '../../styles/home-page.styles.scss';

const Home: React.FC = () => (
  <div className="home-page">
    <NavLink to="quiz/1">
      <Button
        type="button"
        title="Start Quiz"
        handleDataManagment={() => {}}
        isDisabled={false}
      />
    </NavLink>
  </div>
);

export default Home;
