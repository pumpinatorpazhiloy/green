import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import './App.scss';

const App = () => {
  return (
    <div className="wrapper">
		<Header/>
		<Main/>
		<Footer/>
    </div>
  );
};

export default App;
