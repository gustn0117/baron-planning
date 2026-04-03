'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    alert('문의가 접수되었습니다. 감사합니다.');
  };

  return (
    <>
      {/* Hero */}
      <div
        className="contact-hero"
        style={{ backgroundImage: 'url(/images/contact/contact-bg.jpg)' }}
      />

      {/* Contact Form */}
      <div className="contact-form-wrapper">
        {/* Privacy Notice */}
        <div className="privacy-notice">
          <h4>개인정보 수집 및 이용 동의 <span style={{ color: 'red' }}>*</span></h4>
          <p>
            회사명(이하 &apos;회사&apos;라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고
            이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
            처리지침을 수립, 공개합니다.
          </p>
          <br />
          <p>
            <strong>제1조 (개인정보의 처리목적)</strong>
            <br />
            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
            이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에
            따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
        </div>

        <label className="privacy-agree">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          개인정보 수집 및 이용에 동의합니다.
        </label>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>이름</label>
              <input type="text" placeholder="이름을 입력해주세요" required />
            </div>
            <div className="form-group">
              <label>이메일</label>
              <input type="email" placeholder="이메일을 입력해주세요" required />
            </div>
            <div className="form-group">
              <label>연락처</label>
              <input type="tel" placeholder="연락처를 입력해주세요" required />
            </div>
            <div className="form-group full-width">
              <label>내용</label>
              <textarea placeholder="문의 내용을 입력해주세요" required />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            문의하기
          </button>
        </form>
      </div>
    </>
  );
}
