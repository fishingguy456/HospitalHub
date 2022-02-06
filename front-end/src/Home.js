import './Home.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  const [name, setName] = useState('');

  const submitForm = () => {
    console.log(`${name}`);
  };

  return (
    <div>
      <Link to="/hospitals" className="link">For Hospitals</Link>
      <Link to="/users" className="link">For Users</Link>
    </div>
  );
}
export default Home;
