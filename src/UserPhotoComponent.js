import React from "react";
import Slider from 'react-slick'; // 사진 슬라이더
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './UserPhotoComponent.css';

function UserPhotoComponent({ profileImage, username, photos, hashtags, description }) {
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <div className='user-content'>
      {/* 사진이 들어가는 곳 */}
      <div className='userPhoto'>
        {/* 상단에 유저 프로필, 이름, 게시글에 대한 옵션 */}
        <div className='content-box'>
          <img src={profileImage} className='profile' alt='profile' />
          <p>{username}</p>
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
          <img src={photos} className='photo' alt='photo' />
          {/* <img src={photo_example1} className='photo' alt='photo' /> */}
        </div>

        {/* 해시태그 달 곳 */}
        <div className='content-box'>
          <p>{hashtags.map((hashtag, index) => `#${hashtag} `)}</p>
        </div>

        {/* 사진에 대한 설명이 들어가는 곳 */}
        <div className='content-box'>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default UserPhotoComponent;