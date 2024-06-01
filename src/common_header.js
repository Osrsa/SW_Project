import React, { useState } from 'react';
import { Link, useActionData, useNavigate } from 'react-router-dom';
import './common_header.css';

function Common_header() {
  return (
    <div className="responsive-div" id="Naviagator">

      <div className="header-container">
        <p className="kaushan-script header-text">
          Share Your Experience, Photo and Patience
        </p>
      
        <div className="button-container">
            <a href="about.html" className="button">
              <button>About US</button>
            </a>

            <Link to = '/signup' className='button'>
              <button>Sign up</button>
            </Link>

            <a href="signin.html" className="button">
              <button>Sign In</button>
            </a>

            <a href="nyt.html" className="button">
              <button>NYT</button>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Common_header;