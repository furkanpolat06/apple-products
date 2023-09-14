import "./Main.scss";
import data from "../../helpers/data";
import Card from "./Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const Main = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filtereData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="container">
      <Form.Control
        className="forms"
        onChange={handleChange}
        type="search"
        placeholder="Search Products..."
      />
      <div className="card-container">
        {filtereData.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
