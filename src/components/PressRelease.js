// src/components/PressRelease.js
import React from 'react';
import './PressRelease.css';

const PressRelease = () => {
  const pressReleases = [
    { date: '2024.4.13', content: '介護現場における被介護者の状態の見える化実証事業を開始致しました。' },
    { date: '2024.4.13', content: '介護現場における被介護者の状態の見える化実証事業を開始致しました。' },
    { date: '2024.4.13', content: '介護現場における被介護者の状態の見える化実証事業を開始致しました。' },
    { date: '2024.4.13', content: '介護現場における被介護者の状態の見える化実証事業を開始致しました。' },
    { date: '2024.4.13', content: '介護現場における被介護者の状態の見える化実証事業を開始致しました。' },
    { date: '2024.4.12', content: '介護現場における被介護者の状態の見える化実証事業を開始致しました。' },
    { date: '2024.4.11', content: '介護現場における被介護者の状態の見える化実証事業を開始致しました。' },
    // ここに他のプレスリリース項目を追加します
  ];

  return (
    <div className="press-release-container">
      <h1>プレスリリース</h1>
      <div className="press-release-list">
        {pressReleases.map((release, index) => (
          <div key={index} className="press-release-item">
            <span className="date">{release.date}</span>
            <span className="content">{release.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PressRelease;
