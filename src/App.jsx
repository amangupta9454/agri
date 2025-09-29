import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Agri from './Agri';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Agri />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;