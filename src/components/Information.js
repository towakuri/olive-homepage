import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './Header';
import Contact from './Contact';
import PressRelease from './PressRelease';
import Recruit from './Recruit';
import Story from './Story';
import Market from './Market';
import JapanMap from './JapanMap';
import CompanyProfile from './CompanyProfile';
import Secret from './Secret';
import './Information.css';

function Information() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const commentTexts = {
    '開発者ストーリー': <Story />,
    'About Us': <Market />,
    '採用情報': <Recruit />,  
    '今の日本地図': <JapanMap />,
    '会社概要': <CompanyProfile />,
    'お問い合わせ': <Contact />,  
    'Secret': <Secret />,
    'プレスリリース': <PressRelease />,  
  };

  useEffect(() => {
    // Font Awesome CSSの追加
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    // クリーンアップ関数
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleMouseMove = (event) => {
    if (event.clientY <= 20) {
      setIsHeaderVisible(true);
    } else if (window.scrollY > 0) {
      setIsHeaderVisible(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY === 0) {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const contactRef = useRef(null);

  const handleCommentClick = (event, comment) => {
    event.stopPropagation();
    setSelectedComment(commentTexts[comment]);
  };

  const handleClickOutside = useCallback((event) => {
    if (selectedComment && 
        selectedComment.type === Contact && 
        contactRef.current && 
        !contactRef.current.contains(event.target)) {
      setSelectedComment(null);
    } else if (selectedComment && selectedComment.type !== Contact) {
      setSelectedComment(null);
    }
  }, [selectedComment]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <main>
      <Header className={isHeaderVisible ? 'visible' : ''} />
      <div className="info-container">
        <div className="circle-container">
          <img className="center-image" src="/pc.svg" alt="Central" />
          <div className="heartbeat"></div>
          {Object.keys(commentTexts).map((comment, index) => (
            <React.Fragment key={index}>
              <div className={`horizontal-bar bar${index + 1}`}></div>
              <p
                className={`comment comment${index + 1}`}
                onClick={(event) => handleCommentClick(event, comment)}
              >
                {comment}
              </p>
            </React.Fragment>
          ))}
          {selectedComment && (
            <div className="center-text">
              {selectedComment.type === Contact ? (
                <div ref={contactRef}>
                  {selectedComment}
                </div>
              ) : (
                selectedComment
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Information;