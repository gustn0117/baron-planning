'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const historyData = [
  { year: '2014', items: [{ title: '(주)신대륙 건설 창립', role: '', img: '' }] },
  { year: '2015', items: [
    { title: '동탄 서해 그랑블', role: '분양대행', img: '/images/about/history/2015-1.jpg' },
    { title: '동탄 퍼스트프라자', role: 'PM, 분양대행', img: '/images/about/history/2015-2.jpg' },
  ]},
  { year: '2018', items: [
    { title: '광교 대광 로제비앙', role: '분양대행', img: '/images/about/history/2018.jpg' },
  ]},
  { year: '2019', items: [
    { title: '청주 비하동 대광로제비앙 1, 2차', role: '분양대행', img: '/images/about/history/2019.png' },
  ]},
  { year: '2020', items: [
    { title: '동탄 그란비아스타', role: 'PM, 분양대행', img: '/images/about/history/2020-1.jpg' },
    { title: '김포 캐슬 앤 파밀리에 시티', role: '분양 및 광고대행', img: '/images/about/history/2020-2.png' },
    { title: '송추 북한산 경남 아너스빌', role: '분양대행', img: '/images/about/history/2020-3.jpg' },
  ]},
  { year: '2021', items: [
    { title: '부천 브라운스톤 원종', role: '분양 및 광고대행', img: '/images/about/history/2021.jpg' },
  ]},
  { year: '2022', items: [
    { title: '바론플래닝(주) 사명 변경', role: '前 신대륙건설', img: '/images/about/history/2022-1.jpg' },
  ]},
  { year: '2023', items: [
    { title: '부천 브라운스톤 여월', role: '분양 및 광고대행', img: '/images/about/history/2023.jpg' },
  ]},
  { year: '2024', items: [
    { title: '개봉 해피트리 앤 루브루', role: '분양 및 광고대행', img: '/images/about/history/2024.jpg' },
  ]},
];

export default function AboutPage() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionsRef.current.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLDivElement | null, i: number) => {
    if (el) sectionsRef.current[i] = el;
  };

  return (
    <div style={{ paddingTop: '90px' }}>
      {/* Hero Quote */}
      <div ref={(el) => addRef(el, 0)} className="main-section">
        <section className="about-hero">
          <div className="about-quote-icon">
            <span style={{ color: 'white', fontSize: '24px', fontWeight: 700 }}>&ldquo;</span>
          </div>
          <h1 className="about-main-title">
            처음부터 끝까지
            <br />
            함께 성장해 나아가겠습니다.
          </h1>
        </section>
      </div>

      {/* Features */}
      <div ref={(el) => addRef(el, 1)} className="main-section">
        <section style={{ padding: '0 40px 120px', maxWidth: '1400px', margin: '0 auto' }}>
          <div className="about-features">
            <div className="about-feature">
              <h3>부동산 개발 종합 서비스 회사</h3>
              <p>
                20년간의 분양 현장 경험과 노하우를 가지고
                <br />
                최상의 서비스를 제공하기 위해 끊임없이 도전합니다.
              </p>
            </div>
            <div className="about-feature">
              <h3>전문적인 부동산 개발 및 마케팅</h3>
              <p>
                신뢰도 있는 정보를 바탕으로 고객에게 양질의 서비스를
                <br />
                제공하기 위해 멈추지 않고 끊임없이 개선하고 도전합니다.
              </p>
            </div>
            <div className="about-feature">
              <h3>
                <span className="highlight">ALL IN ONE</span>
                <br />
                광고와 분양을 함께 하는 독보적인 솔루션
              </h3>
              <p>
                분양사업부와 광고사업부를 조직하여 각 분야 전문가가 외주 없이 직접 제작하여
                합리적인 가격으로 최상의 퀄리티를 제공할 수 있도록 프로젝트가 진행됩니다.
              </p>
              <p style={{ marginTop: '15px', fontSize: '13px', color: '#999', fontStyle: 'italic' }}>
                * 세계 3대 디자인 어워드 수상, 홍익대학교 IDAS 디자인학 석사
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Introduction */}
      <div ref={(el) => addRef(el, 2)} className="main-section">
        <section className="intro-section">
          <div className="intro-inner">
            <p className="intro-label">INTRODUCTION</p>
            <h2 className="intro-title">
              변화하는 부동산 시장의 흐름을 분석하여
              <br />
              오랜 경험과 노하우를 바탕으로
              <br />
              최적의 솔루션을 제공합니다.
            </h2>
          </div>
        </section>
      </div>

      {/* CEO Photo */}
      <div ref={(el) => addRef(el, 3)} className="main-section">
        <section style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px 80px' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', maxHeight: '500px' }}>
            <Image
              src="/images/about/ceo.jpg"
              alt="바론플래닝 대표"
              width={1400}
              height={500}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </section>
      </div>

      {/* History Section */}
      <div ref={(el) => addRef(el, 4)} className="main-section">
        <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '80px', color: 'var(--dark)' }}>
            우리가 걸어온 길
          </h2>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'var(--border)',
              transform: 'translateX(-50%)',
            }} />

            {historyData.map((yearGroup, yi) => (
              <div key={yi} style={{ marginBottom: '60px' }}>
                {/* Year label */}
                <div style={{
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                  marginBottom: '30px',
                }}>
                  <span style={{
                    display: 'inline-block',
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '8px 24px',
                    borderRadius: '30px',
                    fontSize: '18px',
                    fontWeight: 700,
                  }}>
                    {yearGroup.year}
                  </span>
                </div>

                {/* Items */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: yearGroup.items.length > 1 ? 'repeat(auto-fit, minmax(250px, 1fr))' : '1fr',
                  gap: '20px',
                  maxWidth: '900px',
                  margin: '0 auto',
                }}>
                  {yearGroup.items.map((item, ii) => (
                    <div key={ii} style={{
                      background: 'white',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      textAlign: 'center',
                    }}>
                      {item.img && (
                        <div style={{ height: '180px', overflow: 'hidden' }}>
                          <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={180}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                      )}
                      <div style={{ padding: '20px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '5px' }}>
                          {item.title}
                        </h4>
                        {item.role && (
                          <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>
                            {item.role}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Got a project? */}
      <div ref={(el) => addRef(el, 5)} className="main-section">
        <section style={{
          padding: '120px 40px',
          textAlign: 'center',
          background: 'var(--dark)',
          color: 'white',
        }}>
          <p style={{ fontSize: '16px', color: 'var(--primary)', marginBottom: '20px', letterSpacing: '3px' }}>
            Got a project?
          </p>
          <h2 style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.5 }}>
            전문적인 부동산 개발 및 마케팅으로
            <br />
            성공적인 신화를 만들어 갑니다.
          </h2>
        </section>
      </div>
    </div>
  );
}
