import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import mainPic1 from './main_pic1.png';
import mainPic2 from './main_pic2.png';
import mainPic3 from './main_pic3.jpeg';

function Login() {
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

      <div id="Picture">
        <img src={mainPic1} className="main-pic main-pic1" alt="Main Pic 1"/>
        <img src={mainPic2} className="main-pic main-pic2" alt="Main Pic 2"/>
        <img src={mainPic3} className="main-pic main-pic3" alt="Main Pic 3"/>
      </div>

      <form id="loginForm">
        <div className="form-group email-group">
          <p>Email Address</p>

          <div className="input-container">
            <input id="email_input" type="email" placeholder="SWEngeneering@dgu.ac.kr"/>
          </div>
        </div>

        <div className="form-group password-group">
          <p>Password</p>
          <div className="input-container">
            <input id="password_input" type="password"/>
          </div>
        </div>

        <div className="form-group password-group">
          <button type="submit" className="login-button">
              로그인
          </button>
        </div>
      </form>

    </div>
  );
}

export default Login;
