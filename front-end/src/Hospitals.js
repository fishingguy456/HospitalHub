import "./Hospitals.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Hospitals = () => {
    useEffect(() => {
        setName("Mount Sinai Hospital");
    }, []);

    const [name, setName] = useState("");
    const [total, setTotal] = useState(0);
    const [count, setCount] = useState(0);

    const submitForm = () => {        
        Axios.post("http://localhost:5000/update", {
            name: name,
            total: total,
            count: count,
        });
    };

    return (
        <div>
        <div className="tryhards">
            <label className="adams">Hospital:</label>
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
            <label className="adams">Total Number of ICU Beds:</label>
            <input
            type="number"
            name="total"
            value={total}
            onChange={(event) => {
                setTotal(event.target.value);
            }}
            />
            <label className="adams">Number of available ICU Beds:</label>
            <input
            type="number"
            name="count"
            value={count}
            onChange={(event) => {
                setCount(event.target.value);
            }}
            />
            <input
            className="adams"
            type="submit"
            value="Submit"
            onClick={submitForm}
            />
        </div>
        <Link to="/users" className="link">
            For Users
        </Link>
        <Link to="/" className="link">
            Home
        </Link>
        </div>
    );
};
export default Hospitals;
