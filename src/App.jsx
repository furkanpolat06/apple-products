import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


import data from './helpers/data';
import MyNavbar from './components/Navbar/Navbar';
// import Navbar from './components/Navbar/Navbar';


const App = () =>{
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredData = selectedCategory
    ? data.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase() && item.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
    : data.filter((item)=> item.name.toLowerCase().includes(search.toLocaleLowerCase()))


  
  return(
    <div className='App'>
      <Header/>
      <MyNavbar setSelectedCategory={setSelectedCategory}/>
      <Main filteredData={filteredData} setSearch={setSearch}/>
    </div>
  )
}
export default App;