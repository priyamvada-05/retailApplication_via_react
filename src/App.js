import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
  	<Provider  store={store}>
	  	<BrowserRouter>
		    <div>
		      <HomePage />
		    </div>
	    </BrowserRouter>
    </Provider>
  );
}

export default App;
