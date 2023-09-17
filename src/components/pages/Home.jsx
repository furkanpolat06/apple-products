import { useState } from 'react';
import data from '../../helpers/data';
import Main from '../Main/Main';
import MyNavbar from '../Navbar/MyNavbar';


const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const filteredData = selectedCategory
    ? data.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase() && item.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
    : data.filter((item)=> item.name.toLowerCase().includes(search.toLocaleLowerCase()))


  return (
    <>
    <MyNavbar setSelectedCategory={setSelectedCategory}/>
      <Main filteredData={filteredData} setSearch={setSearch}/>
    </>
  )
}

export default Home