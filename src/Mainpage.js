import React, { useState, useEffect } from 'react';
import { Link, useActionData, useNavigate } from 'react-router-dom';
import Slider from 'react-slick'; // 사진 슬라이더
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './Mainpage.css';

import UserComponent from './usercomponent'; // userComponent 파일 import
import UploadModal from './photoUpload';    // 업로드 모달 파일 import
import UserPhotoComponent from './UserPhotoComponent';  //userPhotoComponent 파일 import

// 이미지 import
import searchicon from './search_icon.png';
import profile from './profile_default.jpg';
import photo_example1 from './아이유 수능 응원 메세지.jpeg'
import photo_example2 from './아이유 인천공항.jpg'
import photo_example3 from './아이유 드림 네이버 포스트.jpeg'




function Main() {

  //서버에서 사용자 정보(닉네임) 가져오기
  const [nickname, setNickname] = useState('');
  //모달 창 관리
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(()=>{
    fetchUserInfo();
  }, []);
 
  const fetchUserInfo = async () => {
    try {
      const response = await fetch('/api/userinfo', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setNickname(data.nickname);
      } else {
        console.error('사용자 정보를 가져오는 데 실패');
      }
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생', error);
    }
  }

  // 로그아웃 처리
  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // 로그아웃 성공 후 '/' 페이지로 이동
        window.location.href = '/';
      } else {
        console.error('로그아웃에 실패했습니다.');
      }
    } catch (error) {
      console.error('로그아웃 중 오류 발생', error);
    }
  }

  //모달 열기
  const openModal = () => {
    setModalOpen(true);
  };

  //모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };


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
            <button className="button" onClick={handleLogout}>Log Out</button>
            <button className="button" onClick={openModal}>UpLoad</button>
        </div>

      </div>

      {modalOpen && <UploadModal closeModal={closeModal} />}

      <div className='main-div' id='maindiv'>
        <div className='content-container'>
          
          <div className='searchbar-container' id='searchbar'>
            <img src={searchicon} className="search-icon" alt="search icon"/>
            <input type="text" className="search-input" placeholder="여기는 검색하는 곳입니다" />
            <button className="search-button">검색</button>
          </div>

          <div className='main-user-content'>
            <div className='main-userPhoto'>

              <UserPhotoComponent 
                profileImage={profile}
                username="유애나"
                photos={photo_example2}
                hashtags={['아이유']}
                description="아이유 인천공항 (사진에 대한 설명이 들어갑니다)"
              />

              <UserPhotoComponent 
                profileImage={profile}
                username="유애나222222222"
                photos={photo_example1}
                hashtags={['IU']}
                description="아이유 사진 2 (사진에 대한 설명이 들어갑니다)"
              />

              <UserPhotoComponent 
                profileImage={profile}
                username="유애나3333333"
                photos={photo_example3}
                hashtags={['IU', '아이유']}
                description="아이유 사진 3 (사진에 대한 설명이 들어갑니다)"
              />
            </div>
            
            {/* 사용자 리스트가 들어가는 곳 */}
            <div className='userList'>
              <UserComponent profileImage={profile} username="사용자1" />
              <UserComponent profileImage={profile} username="사용자2" />
              <UserComponent profileImage={profile} username="사용자3" />
              <UserComponent profileImage={profile} username="사용자4" />
              <UserComponent profileImage={profile} username="사용자5" />
              <UserComponent profileImage={profile} username="사용자6" />
              <UserComponent profileImage={profile} username="사용자7" />
              <UserComponent profileImage={profile} username="사용자8" />
              <UserComponent profileImage={profile} username="사용자9" />
              <UserComponent profileImage={profile} username="사용자10" />
              <p>사용자 리스트</p>
            </div>

          </div>
        
        </div>
      </div>

    </div>
  );
}

export default Main;