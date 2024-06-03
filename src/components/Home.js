import React, { useEffect, useState, useCallback } from 'react';
import './Home.css'; // 必要に応じてCSSをインポート

function Home() {
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const imagesContainer = document.querySelector('.corner-images');
        if (entry.isIntersecting) {
          imagesContainer.classList.add('visible');
        } else {
          imagesContainer.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const targetSections = document.querySelectorAll('.part3, .part4, .part5, .part6');
    targetSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleLanguageMenu = (event) => {
    const rect = event.target.getBoundingClientRect();
    setMenuPosition({ top: rect.top, left: rect.right });
    setShowLanguageMenu(!showLanguageMenu);
  };

  const closeLanguageMenu = useCallback((event) => {
    if (showLanguageMenu && !event.target.closest('.language-menu') && !event.target.closest('img[alt="language switching"]')) {
      setShowLanguageMenu(false);
    }
  }, [showLanguageMenu]);

  useEffect(() => {
    document.addEventListener('click', closeLanguageMenu);
    return () => {
      document.removeEventListener('click', closeLanguageMenu);
    };
  }, [closeLanguageMenu]);

  return (
    <main>
      <div className="part1">
        <p>感情の可能性を感じて</p>
        <p>感情は全ての原点</p>
        <p>あなたのためのテクノロジーでありたい</p>
        <p>We “Sense” You</p>
        <div className="language-switch">
          <img
            src="/language.svg"
            alt="language switching"
            onClick={toggleLanguageMenu}
          />
          <span>language</span>
        </div>
        {showLanguageMenu && (
          <div
            className="language-menu"
            style={{ top: `${menuPosition.top}px`, left: `${menuPosition.left}px` }}
          >
            <p>言語を選択してください：</p>
            <ul>
              <li>日本語</li>
              <li>English</li>
            </ul>
          </div>
        )}
      </div>
      <div className="part2">
        <p>感情を計測ってなに？</p>
        <img src="/girlquestion.svg" alt="girl with question" />
      </div>
      <div className="part3">
        <p>普段は見えにくい感情</p>
        <p>感情を計測してみるとどうなるでしょうか？</p>
      </div>
      <div className="part4">
        <p>計測した感情が見えてきました</p>
        <p>感情が見えるとなにができるでしょう？</p>
      </div>
      <div className="part5">
        <p>メンタルヘルスケア</p>
        <p>授業中の感情変化</p>
        <p>オフィス環境の改善</p>
        <p>感情の思い出記録</p>
      </div>
      <div className="part6">
        <p>Oliveは「察してくれる社会の実現」に向け</p>
        <p>生体データに基づく感情の可視化に取り組んでいます</p>
        <p>もっと気持ちが見てみたくなる社会</p>
        <p>作ってみませんか?</p>
      </div>
      <div className="corner-images">
        <div className="corner-image hospital">
          <img src="/hospital.svg" alt="hospital" />
        </div>
        <div className="corner-image school">
          <img src="/school.svg" alt="school" />
        </div>
        <div className="corner-image family">
          <img src="/family.svg" alt="family" />
        </div>
        <div className="corner-image meeting">
          <img src="/meeting.svg" alt="meeting" />
        </div>
      </div>
    </main>
  );
}

export default Home;
