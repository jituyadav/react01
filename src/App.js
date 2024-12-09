import React, { useState } from 'react';
import StarRating from './components/StarRating';
import './style.css';
const App = () => {
  return <StarRating limit={5} rating={2} />;
};

export default App;
