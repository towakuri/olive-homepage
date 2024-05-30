import React from 'react';
import './Home.css'; // 必要に応じてCSSをインポート

function Home() {
  return (
    <main>
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
      <div className="part1">
        <p>感情の可能性を感じて</p>
        <p>感情は全ての原点</p>
        <p>あなたのためのテクノロジーでありたい</p>
        <p>We “Sense” You</p>
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
        <p>感情の思い出記録</p>
      </div>
      <div className="part6">
        <p>Oliveは「察してくれる社会の実現」に向け</p>
        <p>生体データに基づく感情の可視化に取り組んでいます</p>
        <p>もっと気持ちが見てみたくなる社会</p>
        <p>作ってみませんか?</p>
      </div>
    </main>
  );
}

export default Home;
