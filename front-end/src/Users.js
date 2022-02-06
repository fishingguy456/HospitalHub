import "./Users.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Users = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(5);

  const submitForm = () => {
    Axios.get("http://localhost:5000/read", {
      name: name,
    }).then((response) => {
      console.log(response);
      setTotal(response.data.total);
      setCount(response.data.count);
    });
  };

  const determineGuideline = () => {
    console.log(`${total}, ${count}`);
    if (count == 0) {
      return "No ICU Beds count at your nearest hospital. Please be extremely careful of all COVID threats.";
    } else if (count / total < 0.5){
      return "There are less than half the ICU beds available at your nearest hospital. Please be extremely careful of all COVID threats.";
    } else {
      return "More than half the ICU beds are available at your nearest hospital. Please be careful of COVID threats.";
    }
  };

  return (
    <div>
      <div className="tryhards">
        <label className="adams">Select your nearest hospital:</label>
        <select
          id="hospitals"
          name="hospitals"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        >
          <option value="Mount Sinai Hospital">Mount Sinai Hospital</option>
          <option value="Toronto General Hospital">
            Toronto General Hospital
          </option>
          <option value="Women's College Hospital">
            Women's College Hospital
          </option>
          <option value="SickKids Hospital">SickKids Hospital</option>
          <option value="Toronto Western Hospital">
            Toronto Western Hospital
          </option>
          <option value="St. Joseph's Hospital">St. Joseph's Hospital</option>
          <option value="St. Michael's Hospital">St. Michael's Hospital</option>
          <option value="Sunnybrook Hospital">Sunnybrook Hospital</option>
        </select>
        <input
          className="adams"
          type="submit"
          value="Submit"
          onClick={submitForm}
        />
        <div className="adamContainer">
            <div className="adams">
                <span>Number of available ICU beds:</span>
            </div>
            <div className="adams">
                <span>{count}</span>
            </div>
            <div className="adams">
                <span>Recommended Activity Guidelines</span>
            </div>
            <div className="adams">
                <span>{determineGuideline()}</span>
            </div>
        </div>
      </div>
      <Link to="/hospitals" className="link">
        For Hospitals
      </Link>
      <Link to="/" className="link">
        Home
      </Link>
    </div>
  );
};
export default Users;
