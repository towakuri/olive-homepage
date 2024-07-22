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

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここにフォーム送信のロジックを追加します
    console.log('Form submitted:', formData);
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
