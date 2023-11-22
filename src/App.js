import './App.scss';
import './reset.css'
import Header from './comp/Header';
import Home from './comp/Home';
import Footer from './comp/Footer';
import Context from './comp/Context';


function App() {
  return (
    <Context>
      <Header/>
      <Home />
      <Footer/>
    </Context>

  );
}

export default App;
