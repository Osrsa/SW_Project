import React, { useState } from 'react';
import { Link, useActionData, useNavigate } from 'react-router-dom';
import './Login.css';
import mainPic1 from './main_pic1.png';
import mainPic2 from './main_pic2.png';
import mainPic3 from './main_pic3.jpeg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if(response.ok){
      setMessage('로그인에 성공했습니다!');
      setError(''); // 에러 메시지 초기화
      alert('로그인에 성공했습니다!');
      navigate('/main');
    } else {
      setMessage('');
      if (data.error === '잘못된 이메일입니다') {
        alert('등록되지 않은 이메일입니다');
      } else if (data.error === '잘못된 비밀번호입니다') {
        alert('잘못된 비밀번호입니다');
      } else {
        setError(data.error);
      }
    }
  } catch (error) {
    setError("로그인 중 오류가 발생했습니다");
    alert("로그인 중 오류가 발생했습니다");
  }
}


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

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="form-group email-group">
          <p>Email Address</p>

          <div className="input-container">
            <input 
              id="email_input" 
              type="email" 
              placeholder="SWEngeneering@dgu.ac.kr"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group password-group">
          <p>Password</p>
          <div className="input-container">
            <input 
              id="password_input" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group password-group">
          <button type="submit" className="login-button">
              로그인
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}

    </div>
  );
}

export default Login;
