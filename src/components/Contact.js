import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        // フォーム送信成功時の処理をここに追加します
      } else {
        console.error('Form submission error:', response.statusText);
        // フォーム送信失敗時の処理をここに追加します
      }
    } catch (error) {
      console.error('Form submission error:', error);
      // フォーム送信エラー時の処理をここに追加します
    }
  };

  return (
    <div className="content">
      <h1>お問い合わせ</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>姓</p>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="例) 山田"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <p>名</p>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="例) 太郎"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <p>メールアドレス</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="例) Olive@01live.co.jp"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <p>電話番号</p>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="例) 052-221-7350"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <p>お問い合わせ内容</p>
          <textarea
            id="message"
            name="message"
            placeholder="お問合せ内容を入力してください。"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">確認する</button>
      </form>
    </div>
  );
};

export default Contact;
