// Home.js
import React, { useState } from 'react';
import data from '../../helpers/data';
import MyNavbar from '../Navbar/Navbar';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const filteredData = selectedCategory
      ? data.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      : data;

  return (
    <>
      <MyNavbar setSelectedCategory={setSelectedCategory}/>
    
    </>
  );
};

export default Home;
