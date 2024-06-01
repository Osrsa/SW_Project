import React from 'react';
import { Link, useActionData, useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // 사진 슬라이더
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Mainpage.css';

import UserComponent from './usercomponent'; // userComponent 파일 import


// 이미지 import
import searchicon from './search_icon.png';
import profile from './profile_default.jpg';
import photo_example1 from './아이유 수능 응원 메세지.jpeg'
import photo_example2 from './아이유 인천공항.jpg'
import photo_example3 from './아이유 드림 네이버 포스트.jpeg'

function Main() {
  // 사진 배열 생성 후 사진 슬라이더로 활용
  const example_photos = [photo_example1, photo_example2, photo_example3]; // 사진 배열

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <div className='header-container'>
        <p className='kaushan-script header-text'>
          Share Your Experience, Photo and Patience
        </p>

        <div className="button-container">
            <Link to = '/' className='button'>
              <button>Log out</button>
            </Link>
        </div>

      </div>

      <div className='main-div' id='maindiv'>
        <div className='content-container'>
          
          <div className='searchbar-container' id='searchbar'>
            <img src={searchicon} className="search-icon" alt="search icon"/>
            <input type="text" className="search-input" placeholder="여기는 검색하는 곳입니다" />
            <button className="search-button">검색</button>
          </div>

          <div className='user-content'>
            {/* 사진이 들어가는 곳 */}
            <div className='userPhoto'>
              {/* 상단에 유저 프로필, 이름, 게시글에 대한 옵션 */}
              <div className='content-box'>
                <img src={profile} className='profile' alt='profile' />
                <p>사용자 이름</p>
                <p>제일 오른쪽에 옵션 버튼 넣을 예정입니다</p>
              </div>

              {/* 사진이 표시되는 곳 */}
              <div className='photo-container'>
                {/* 일단 슬라이더 기능은 스킵 */}
                {/* <Slider {...settings}>
                  {example_photos.map((example_photos, index) => (
                    <div key = {index}>
                      <img src={example_photos} className='photo' alt={`photo${index + 1}`} />
                    </div>
                  ))}
                </Slider> */}
                {/* <img src={photo_example1} className='photo' alt='photo' /> */}
                <img src={photo_example2} className='photo' alt='photo' />
                {/* <img src={photo_example1} className='photo' alt='photo' /> */}
              </div>

              {/* 해시태그 달 곳 */}
              <div className='content-box'>
                <p>해시태그가 들어갈 곳 예시 #아이유</p>
              </div>

              {/* 사진에 대한 설명이 들어가는 곳 */}
              <div className='content-box'>
                <p>사진에 대한 설명이 들어갑니다</p>
              </div>
            </div>

            {/* 사용자 리스트가 들어가는 곳 */}
            <div className='userList'>
              <UserComponent profileImage={profile} username="사용자1" />
              <UserComponent profileImage={profile} username="사용자2" />
              <p>사용자 리스트</p>
            </div>
          </div>
        
        </div>
      </div>

    </div>
  );
}

export default Main;