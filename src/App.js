import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
  	<Provider  store={store}>
	  	<BrowserRouter>
	  		<PersistGate persistor={persistor}>
		    <div>
		      <HomePage />
		    </div>
		    </PersistGate>
	    </BrowserRouter>
    </Provider>
  );
}

export default App;
