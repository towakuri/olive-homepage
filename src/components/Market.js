import React from 'react';
import './Market.css'; // CSSファイルをインポート

const Market = () => {
  return (
    <div className="market-container">
      <ul className="market-list">
        <li className="market-item">Oliveでは内閣府が提唱する「Society 5.0」や「Marketing 4.0」で語られる「Personalized Service」の実現のために必要とされる根底のデータとして「感情」の可視化に取り組んでまいります。</li>
        <li className="market-item">カメラやセンサー、スマートウォッチによる生体データ計測等の技術は、加速度的に進歩しており、ユーザーもまた生体データを計測されることが日常化してきています。今後、生体計測は様々な市場における必須技術となります。</li>
        <li className="market-item">生体 / 感情の計測技術は『ヘルステック市場』を形成、さらにそのデータを人々の生活や仕事の環境改善に活用する技術として『トランステック市場』を形成し、今後、トランステック市場への取組が新規事業開拓の鍵となります。</li>
        <li className="market-item">センシング技術の進歩にともない、取得した生体データによるストレスや疲労等の感情計測を活用した新たな取り組みは各市場にて始まっており、今後、生体・感情計測は様々な市場の求める必須機能となります。</li>
      </ul>
    </div>
  );
};

export default Market;