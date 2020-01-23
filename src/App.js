import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  	<BrowserRouter>
	    <div>
	      <HomePage />
	    </div>
    </BrowserRouter>
  );
}

export default App;
