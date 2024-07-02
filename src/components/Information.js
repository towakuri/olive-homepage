// src/components/Information.js
import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header'; // ヘッダーコンポーネントをインポート
import Contact from './Contact';
import PressRelease from './PressRelease';
import './Information.css';

function Information() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);

  const commentTexts = {
    '開発者ストーリー': 'Oliveの活動は、生体データの解析を通して「なぜその人がその考えに至ったのか」という、人間の行動と感情の因果関係を明らかにすることです。世の中のデジタル化が急速に進むなか、このWHYの視点を明らかにするテクノロジーは、ユーザーの気持ちをデジタル世界に反映する非常に重要なピースになります。感情を中心にデジタル化を考えることで、本当の意味でのユーザーのためのサービスが生まれると、私達は信じています。',
    '我々の取り組む市場': 'Oliveでは内閣府が提唱する「Society 5.0」や「Marketing 4.0」で語られる「Personalized Service」の実現のために必要とされる根底のデータとして「感情」の可視化に取り組んでまいります。',
    'マルチモーダル': 'マルチモーダル感情認識技術の活用感情認識で最もメジャーなのが音声と表情を利用したものですが一人でいる時には発話や表情がはっきりと示されないため実は利用できるシーンが限定的です。Oliveでは状況に合わせて複数の情報を組み合わせるマルチモーダルな感情認識技術を採用しています。言語的な情報が含まれないため、シーンに依存しない計測が可能でユーザの抵抗感が少ないのが特徴です。',
    'La Cause': '心配りのコミュニケーション「心配り」は相手の気持ちに配慮する “察する” という意味の言葉ですが感情を周囲に見える化する「心を配信する」という読んで字の如くの意味も込められています。Oliveでは生体情報を中心としたマルチモーダル感情認識技術によって心と心をつなげるコミュニケーションを提供します。',
    '採用情報': <Contact />,  // ここを修正
    '今の日本地図': 'これは今の日本地図の文章です。',
    '会社概要': 'これは会社概要の文章です。',
    'お問い合わせ': <Contact />,  // ここを修正
    'Secret': 'これはSecretの文章です。',
    'プレスリリース': <PressRelease />,  // ここを修正
    'Oliveとは': '私たちは「察してくれる社会の実現」に向け生体データに基づく感情の可視化に取り組んでいます。あらゆるもののスマート化が進むなか忘れてはならないのが「人の感情」です。「人の感情」とは全てを生み出すエネルギーの源。私たちは、その源泉を解き明かし可視化しこのスマート社会に反映していきます。'
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

  const handleCommentClick = (comment) => {
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
              onClick={() => handleCommentClick(comment)}
            >
              {comment}
            </p>
          ))}
          {selectedComment && (
            <div className="center-text">
              {typeof selectedComment === 'string' ? <p>{selectedComment}</p> : selectedComment}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Information;
