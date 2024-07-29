import React from 'react';
import './CompanyProfile.css'; // 新しいCSSファイルをインポート

const CompanyProfile = () => {
  return (
  <div className="company-profile-container">
    <h2>会社概要</h2>
    <div className="company-profile">
      <table>
        <tbody>
          <tr>
            <td className="label">社名:</td>
            <td>Olive株式会社</td>
          </tr>
          <tr>
            <td className="label">設立:</td>
            <td>2022年8月 (2019年1月より事業活動開始)</td>
          </tr>
          <tr>
            <td className="label">本社(謄本):</td>
            <td>愛知県名古屋市</td>
          </tr>
          <tr>
            <td className="label">東京オフィス:</td>
            <td>東京都大田区本羽田2丁目7-1</td>
          </tr>
          <tr>
            <td className="label">資本金:</td>
            <td>7,115,500円</td>
          </tr>
          <tr>
            <td className="label">役員・従業員数:</td>
            <td>13名 (派遣・業務委託除く) (博士号保有者5名、外国籍7名)</td>
          </tr>
          <tr>
            <td className="label">取引銀行:</td>
            <td>名古屋銀行、大垣共立銀行、三菱UFJ銀行</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default CompanyProfile;