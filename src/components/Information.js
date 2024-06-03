import React, { useState, useEffect } from 'react';
import './Information.css';

function Information() {
  const [selectedText, setSelectedText] = useState('');

  const handleClick = (text) => {
    if (selectedText === text) {
      setSelectedText(''); // 同じテキストをクリックした場合に閉じる
    } else {
      setSelectedText(text); // 違うテキストをクリックした場合に表示
    }
  };

  const handleDocumentClick = (event) => {
    if (!event.target.closest('.comment') && !event.target.closest('.center-text')) {
      setSelectedText('');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="info-container">
      <div className="circle-container">
        <img className="center-image" src="/pc.svg" alt="Central" />
        <p className="comment comment1" onClick={() => handleClick('開発者ストーリー')}>開発者ストーリー</p>
        <p className="comment comment2" onClick={() => handleClick('我々の取り組む市場')}>我々の取り組む市場</p>
        <p className="comment comment3" onClick={() => handleClick('マルチモーダル')}>マルチモーダル</p>
        <p className="comment comment4" onClick={() => handleClick('La Cause')}>La Cause</p>
        <p className="comment comment5" onClick={() => handleClick('採用情報')}>採用情報</p>
        <p className="comment comment6" onClick={() => handleClick('今の日本地図')}>今の日本地図</p>
        <p className="comment comment7" onClick={() => handleClick('会社概要')}>会社概要</p>
        <p className="comment comment8" onClick={() => handleClick('お問い合わせ')}>お問い合わせ</p>
        <p className="comment comment9" onClick={() => handleClick('Secret')}>Secret</p>
        <p className="comment comment10" onClick={() => handleClick('プレスリリース')}>プレスリリース</p>
        <p className="comment comment11" onClick={() => handleClick('Oliveとは')}>Oliveとは</p>
        {selectedText && (
          <div className="center-text">
            <p>{selectedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Information;
