import React from 'react';
import config from 'config';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <img src={`https://github.com/${config.githubUsername}.png`} />
    </>
  );
};

export default Home;
