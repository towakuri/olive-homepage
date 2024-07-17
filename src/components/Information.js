import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header'; // ヘッダーコンポーネントをインポート
import Contact from './Contact';
import PressRelease from './PressRelease';
import Recruit from './Recruit';
import Story from './Story';
import Market from './Market';
import Multimodal from './Multimodal';
import LaCause from './LaCause';
import JapanMap from './JapanMap';
import CompanyProfile from './CompanyProfile';
import Secret from './Secret';
import AboutOlive from './AboutOlive';
import './Information.css';

function Information() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const commentTexts = {
    '開発者ストーリー': <Story />,
    '我々の取り組む市場': <Market />,
    'マルチモーダル': <Multimodal />,
    'La Cause': <LaCause />,
    '採用情報': <Recruit />,  
    '今の日本地図': <JapanMap />,
    '会社概要': <CompanyProfile />,
    'お問い合わせ': <Contact />,  
    'Secret': <Secret />,
    'プレスリリース': <PressRelease />,  
    'Oliveとは': <AboutOlive />
  };

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

  const handleCommentClick = (event, comment) => {
    event.stopPropagation(); // イベントの伝播を防ぐ
    setSelectedComment(commentTexts[comment]);
  };

  const handleClickOutside = useCallback((event) => {
    if (
      selectedComment &&
      !event.target.closest('.center-text') &&
      !event.target.closest('.comment')
    ) {
      setSelectedComment(null);
    }
  }, [selectedComment]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <main>
      <Header className={isHeaderVisible ? 'visible' : ''} />
      <div className="info-container">
        <div className="circle-container">
          <img className="center-image" src="/pc.svg" alt="Central" />
          {Object.keys(commentTexts).map((comment, index) => (
            <p
              key={index}
              className={`comment comment${index + 1}`}
              onClick={(event) => handleCommentClick(event, comment)}
            >
              {comment}
            </p>
          ))}
          {selectedComment && (
            <div className="center-text" onClick={(event) => event.stopPropagation()}>
              {selectedComment}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Information;
