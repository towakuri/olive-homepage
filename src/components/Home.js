import React, { useEffect } from 'react';
import './Home.css'; // 必要に応じてCSSをインポート

function Home() {

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
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

  return (
    <main>
      <div className="part1">
        <p>感情の可能性を感じて</p>
        <p>感情は全ての原点</p>
        <p>あなたのためのテクノロジーでありたい</p>
        <p>We “Sense” You</p>
      </div>
      <div className="part2">
        <p>感情を計測ってなに？</p>
        <img src="/girlquestion.svg" alt="girlquestion" />
      </div>
      <div className="part3">
        <p>普段は見えにくい感情</p>
        <p>感情を計測してみるとどうなるでしょうか？</p>
        <div className="hospital">
          <img src="/hospital.svg" alt="hospital1" />
          <img src="/sweat.svg" alt="sweat1" />
        </div>
        <div className="school">
          <img src="/school.svg" alt="school1" />
        </div>
        <div className="family">
          <img src="/family.svg" alt="family1" />
        </div>
        <div className="meeting">
          <img src="/meeting.svg" alt="meeting1" />
        </div>
      </div>
      <div className="part4">
        <p>計測した感情が見えてきました</p>
        <p>感情が見えるとなにができるでしょう？</p>
        <div className="hospital">
          <img src="/hospital.svg" alt="hospital2" />
        </div>
        <div className="school">
          <img src="/school.svg" alt="school2" />
        </div>
        <div className="family">
          <img src="/family.svg" alt="family2" />
        </div>
        <div className="meeting">
          <img src="/meeting.svg" alt="meeting2" />
        </div>
      </div>
      <div className="part5">
        <p>メンタルヘルスケア</p>
        <p>授業中の感情変化</p>
        <p>オフィス環境の改善</p>
        <p>感情の思い出記録</p>
        <div className="hospital">
          <img src="/hospital.svg" alt="hospital3" />
        </div>
        <div className="school">
          <img src="/school.svg" alt="school3" />
        </div>
        <div className="family">
          <img src="/family.svg" alt="family3" />
        </div>
        <div className="meeting">
          <img src="/meeting.svg" alt="meeting3" />
        </div>
      </div>
      <div className="part6">
        <p>Oliveは「察してくれる社会の実現」に向け</p>
        <p>生体データに基づく感情の可視化に取り組んでいます</p>
        <p>もっと気持ちが見てみたくなる社会</p>
        <p>作ってみませんか?</p>
        <div className="hospital">
          <img src="/hospital.svg" alt="hospital4" />
        </div>
        <div className="school">
          <img src="/school.svg" alt="school4" />
        </div>
        <div className="family">
          <img src="/family.svg" alt="family4" />
        </div>
        <div className="meeting">
          <img src="/meeting.svg" alt="meeting4" />
        </div>
      </div>
    </main>
  );
}

export default Home;
