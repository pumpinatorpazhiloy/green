import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import {MainComponent, FlowersComponent, MoreComponent, ContactsComponent} from './pages';
import Footer from './components/footer/Footer';

import bg from "./img/background/bg.png"

import './App.scss';

const App = () => {
  return (
    <Router>
    	<div className="wrapper">
			<Header/>
				<Routes>
					<Route exact path='/' element={<MainComponent/>}/>
					<Route exact path='/flowers' element={<FlowersComponent/>}/>
					<Route exact path='/more' element={<MoreComponent/>}/>
					<Route exact path='/contact' element={<ContactsComponent/>}/>
				</Routes>
			<Footer/>
			<div className="bg">
				<img src={bg} alt="background"/>
			</div>
	    </div>
    </Router>
  );
};

export default App;
