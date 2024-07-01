import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header'; // ヘッダーコンポーネントをインポート
import './Information.css';

function Information() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

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

  const handleCommentClick = (comment) => {
    setSelectedComment(comment);
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
          <p className="comment comment1" onClick={() => handleCommentClick('開発者ストーリー')}>開発者ストーリー</p>
          <p className="comment comment2" onClick={() => handleCommentClick('我々の取り組む市場')}>我々の取り組む市場</p>
          <p className="comment comment3" onClick={() => handleCommentClick('マルチモーダル')}>マルチモーダル</p>
          <p className="comment comment4" onClick={() => handleCommentClick('La Cause')}>La Cause</p>
          <p className="comment comment5" onClick={() => handleCommentClick('採用情報')}>採用情報</p>
          <p className="comment comment6" onClick={() => handleCommentClick('今の日本地図')}>今の日本地図</p>
          <p className="comment comment7" onClick={() => handleCommentClick('会社概要')}>会社概要</p>
          <p className="comment comment8" onClick={() => handleCommentClick('お問い合わせ')}>お問い合わせ</p>
          <p className="comment comment9" onClick={() => handleCommentClick('Secret')}>Secret</p>
          <p className="comment comment10" onClick={() => handleCommentClick('プレスリリース')}>プレスリリース</p>
          <p className="comment comment11" onClick={() => handleCommentClick('Oliveとは')}>Oliveとは</p>
          {selectedComment && (
            <div className="center-text">
              <p>{selectedComment}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Information;
