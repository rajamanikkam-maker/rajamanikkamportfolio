import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container home_container">
      <div className="home_innerdiv">
        <div className="left_div">
          <h2>
            Welcome to <span style={{ color: '#6c63ff' }}>R.Rajamanikkam</span>
          </h2>
          <p style={{ color: '#666', letterSpacing: '.5px', marginTop: 2 }}>
            Your personalized and engaging portfolio description goes here. Highlight your skills, experience, and achievements.
          </p>
          <div className="btn_div mt-4">
            <Link to="/playlist">
              <button className="button" style={{ background: '#2f2d69' }}>
                View Projects
              </button>
            </Link>
            <Link to="/contact">
              <button className="button" style={{ background: '#6c63ff' }}>
                Contact Me
              </button>
            </Link>
           
          </div>
        </div>
        <div className="right_div">
          <div className="profile-image">
            <img src="RAJA PHOTO.png" alt="Your Profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
