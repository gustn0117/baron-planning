'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  { title: '개봉 해피트리 앤 루브루', desc: '2024 | 서울 구로구 | 아파트 295세대', img: '/images/result/portfolio1.jpg' },
  { title: '부천 브라운스톤 여월', desc: '2023 | 경기도 부천시 | 아파트 142세대', img: '/images/result/portfolio2.jpg' },
  { title: '부천 이안 시그니처 역곡', desc: '2022 | 경기도 부천시 | 아파트 99세대', img: '/images/result/portfolio3.jpg' },
  { title: '부천 브라운스톤 원종', desc: '2022 | 경기도 부천시 | 아파트 137세대', img: '/images/result/portfolio-p2-1.jpg' },
  { title: '송추 북한산 경남 아너스빌', desc: '2020 | 경기도 양주시 | 아파트 604세대', img: '/images/result/portfolio-p2-2.png' },
  { title: '김포 캐슬 앤 파밀리에 시티', desc: '2020 | 경기도 김포시 | 상가 36호실', img: '/images/result/portfolio-p2-3.jpg' },
];

export default function HomePage() {
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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionsRef.current[index] = el;
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-bg"
          style={{ backgroundImage: 'url(/images/main/hero-bg.gif)' }}
        />
        <div className="hero-overlay" />
        <button className="scroll-indicator" onClick={scrollDown} aria-label="스크롤">
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
        </button>
      </section>

      {/* Be My Guest Section */}
      <div ref={(el) => addRef(el, 0)} className="main-section">
        <section className="guest-section">
          <p className="guest-label">Be my Guest.</p>
          <h2 className="guest-title">
            풍부한 경험을 토대로 한 노하우를 바탕으로
            <br />
            부동산 시장의 변화를 예측하며 한 발 앞서 나아갑니다.
          </h2>
        </section>
      </div>

      {/* Sales Department Section */}
      <div ref={(el) => addRef(el, 1)} className="main-section">
        <section className="dept-section">
          <div
            className="dept-bg"
            style={{ backgroundImage: 'url(/images/main/hero-bg2.jpg)' }}
          />
          <div className="dept-content">
            <div className="dept-content-inner">
              <p className="dept-label">Sales Department</p>
              <h2 className="dept-title"><strong>분양사업부</strong></h2>
              <p className="dept-desc">
                20년 이상의 분양 전문 베테랑으로 구성,
                <br />
                체계적이고 성공적인 분양 신화를 이끌고 있습니다.
              </p>
              <div className="dept-mini-cards">
                {['부동산컨설팅', '부동산개발', '부동산마케팅', '분양대행'].map(
                  (item) => (
                    <div key={item} className="dept-mini-card">
                      {item}
                    </div>
                  )
                )}
              </div>
              <Link href="/sales" className="dept-more-link">
                자세히 보기 →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Advertising Department Section */}
      <div ref={(el) => addRef(el, 2)} className="main-section">
        <section className="dept-section">
          <div
            className="dept-bg"
            style={{ backgroundImage: 'url(/images/ad/ad-bg.jpg)' }}
          />
          <div className="dept-content">
            <div className="dept-content-inner">
              <p className="dept-label">Advertising Department</p>
              <h2 className="dept-title"><strong>광고사업부</strong></h2>
              <p className="dept-desc">
                2D, 3D 각 분야 광고 전문가로 구성,
                <br />
                외주 없는 최상의 퀄리티를 제공합니다.
              </p>
              <div className="dept-mini-cards">
                {['사이버모델하우스', '분양광고디자인', '온라인마케팅', '홈페이지제작'].map(
                  (item) => (
                    <div key={item} className="dept-mini-card">
                      {item}
                    </div>
                  )
                )}
              </div>
              <Link href="/advertising" className="dept-more-link">
                자세히 보기 →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Portfolio Preview Section */}
      <div ref={(el) => addRef(el, 3)} className="main-section">
        <section className="portfolio-preview">
          <div className="portfolio-preview-header">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="section-heading"><strong>사업실적</strong></h2>
            </div>
            <Link href="/portfolio" className="portfolio-link">
              View All →
            </Link>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <div key={i} className="portfolio-item">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="portfolio-item-overlay">
                  <h3 className="portfolio-item-title">{item.title}</h3>
                  <p className="portfolio-item-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
