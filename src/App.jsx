import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MyNavbar from './components/Navbar/Navbar';
// import Navbar from './components/Navbar/Navbar';


const App = () =>{
  return(
    <div className='App'>
      <Header/>
      <MyNavbar/>
      <Main/>
    </div>
  )
}
export default App;