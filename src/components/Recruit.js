import React from 'react';
import './Recruit.css';

const JobSection = () => (
  <div className="section">
    <h2>職種</h2>
    <ul>
      <li><strong>ソフトウェアエンジニア</strong>
        <ul>
          <li>プロダクトマネージャー</li>
          <li>クラウドエンジニア</li>
          <li>Web Appエンジニア</li>
          <li>組み込みエンジニア</li>
          <li>機械学習エンジニア</li>
          <li>UI/UXエンジニア</li>
        </ul>
      </li>
      <li><strong>デザイナー</strong>
        <ul>
          <li>副業スペシャリストデザイナー</li>
        </ul>
      </li>
      <li><strong>ビジネス・マーケティング</strong>
        <ul>
          <li>事業開発マネージャー</li>
          <li>プロジェクトマネージャー</li>
        </ul>
      </li>
      <li><strong>広報</strong>
        <ul>
          <li>事業広報</li>
        </ul>
      </li>
    </ul>
  </div>
);

const InternSection = () => (
  <div className="section">
    <h2>インターン</h2>
    <p>理系、文系問わず、インターン募集しています。</p>
    <p>ベンチャーでのインターンを経験することで社会に出る前に身近に会社経営や事業の成長、モノづくりを経験してみませんか？</p>
  </div>
);

const EmploymentSection = () => (
  <div className="section">
    <h2>雇用形態</h2>
    <p>正社員・業務委託</p>
  </div>
);

const LocationSection = () => (
  <div className="section">
    <h2>勤務地</h2>
    <p>フルリモート</p>
  </div>
);

const WorkingHoursSection = () => (
  <div className="section">
    <h2>勤務時間</h2>
    <p>標準労働時間帯: 9:00-18:00（うち休憩 12:00-13:00/実働8時間）</p>
  </div>
);

const HolidaysSection = () => (
  <div className="section">
    <h2>休日・休日</h2>
    <p>完全週休二日制（毎週土日及び祝日休み）年間休日120日</p>
  </div>
);

const BenefitsSection = () => (
  <div className="section">
    <h2>福利厚生</h2>
    <p>社会保険完備</p>
  </div>
);

const ApplicationSection = () => (
  <div className="section">
    <h2>応募方法</h2>
    <p>recruit@olive.co.jpへメールまたは、「お問い合わせ」からご連絡ください</p>
  </div>
);

const Recruit = () => {
  return (
    <div className="recruit-container">
      <h1>採用情報</h1>
      <div className="recruit-content">
        <JobSection />
        <InternSection />
        <EmploymentSection />
        <LocationSection />
        <WorkingHoursSection />
        <HolidaysSection />
        <BenefitsSection />
        <ApplicationSection />
      </div>
    </div>
  );
};

export default Recruit;