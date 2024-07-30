import React from 'react';
import './Market.css';
import './LaCause.css';
import './Multimodal.css';

const Market = () => {
  return (
    <>
    <div className="market-container">
      <h1>我々の取り組む市場</h1>
      <ul className="market-list">
        <li className="market-item">Oliveでは内閣府が提唱する「Society 5.0」や「Marketing 4.0」で語られる「Personalized Service」の実現のために必要とされる根底のデータとして「感情」の可視化に取り組んでまいります。</li>
        <li className="market-item">カメラやセンサー、スマートウォッチによる生体データ計測等の技術は、加速度的に進歩しており、ユーザーもまた生体データを計測されることが日常化してきています。今後、生体計測は様々な市場における必須技術となります。</li>
        <li className="market-item">生体 / 感情の計測技術は『ヘルステック市場』を形成、さらにそのデータを人々の生活や仕事の環境改善に活用する技術として『トランステック市場』を形成し、今後、トランステック市場への取組が新規事業開拓の鍵となります。</li>
        <li className="market-item">センシング技術の進歩にともない、取得した生体データによるストレスや疲労等の感情計測を活用した新たな取り組みは各市場にて始まっており、今後、生体・感情計測は様々な市場の求める必須機能となります。</li>
      </ul>
    </div>
     <div className="la-cause-container"> {/* コンテナを追加 */}
     <h1>La Cause</h1>
       <p className="la-cause-text"> {/* テキストにクラスを追加 */}
         心配りのコミュニケーション「心配り」は相手の気持ちに配慮する “察する” という意味の言葉ですが感情を周囲に見える化する「心を配信する」という読んで字の如くの意味も込められています。Oliveでは生体情報を中心としたマルチモーダル感情認識技術によって心と心をつなげるコミュニケーションを提供します。
       </p>
     </div>
     <div className="multimodal">
    <h1>マルチモーダル</h1>
    <div className="multimodal-container">
      <p>
        マルチモーダル感情認識技術の活用感情認識で最もメジャーなのが音声と表情を利用したものですが、一人でいる時には発話や表情がはっきりと示されないため、実は利用できるシーンが限定的です。
      </p>
      <p>
        Oliveでは状況に合わせて複数の情報を組み合わせるマルチモーダルな感情認識技術を採用しています。言語的な情報が含まれないため、シーンに依存しない計測が可能でユーザの抵抗感が少ないのが特徴です。
      </p>
    </div>
    </div>
     </>
  );
};

export default Market;