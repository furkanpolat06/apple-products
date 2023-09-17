import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/pages/Home';



const App = () =>{

  
  return(
    <div className='App'>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}
export default App;