import "./Main.scss";
import data from "../../helpers/data";
import Card from "./Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Main = ({setSearch, filteredData}) => {
  
 
  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  return (
    <div className="container">
      <Form.Control
        className="forms"
        onChange={handleChange}
        type="search"
        placeholder="Search Products..."
      />
      <div className="card-container">
        {filteredData.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
