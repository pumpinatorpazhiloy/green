import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import {MainComponent, FlowersComponent} from './pages';
import Footer from './components/footer/Footer';

import './App.scss';

const App = () => {
  return (
    <Router>
    	<div className="wrapper">
			<Header/>
				<Routes>
					<Route exact path='/' element={<MainComponent/>}/>
					<Route exact path='/flowers' element={<FlowersComponent/>}/>
				</Routes>
			<Footer/>
	    </div>
    </Router>
  );
};

export default App;
