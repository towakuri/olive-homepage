import React from 'react';
import './Multimodal.css'; // CSSファイルをインポート

const Multimodal = () => {
  return (
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
  );
};

export default Multimodal;