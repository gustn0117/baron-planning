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
    <div style={{ paddingTop: '100px' }}>
      {/* Hero Quote */}
      <div ref={(el) => addRef(el, 0)} className="main-section">
        <section className="about-hero">
          <div className="about-quote-icon" />
          <h1 className="about-main-title">
            처음부터 끝까지
            <br />
            <strong>함께 성장해 나아가겠습니다.</strong>
          </h1>
        </section>
      </div>

      {/* Values */}
      <div ref={(el) => addRef(el, 1)} className="main-section">
        <section className="about-values">
          {/* Value 1 */}
          <div className="val-row">
            <div className="val-img">
              <Image src="/images/about/value1.jpg" alt="부동산 개발 종합 서비스" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="val-text">
              <span className="val-num">01</span>
              <h3>부동산 개발<br />종합 서비스 회사</h3>
              <p>
                20년간의 분양 현장 경험과 노하우를 가지고
                최상의 서비스를 제공하기 위해 끊임없이 도전합니다.
              </p>
            </div>
          </div>

          {/* Value 2 - reversed */}
          <div className="val-row val-row-reverse">
            <div className="val-img">
              <Image src="/images/about/value2.jpg" alt="전문적인 부동산 마케팅" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="val-text">
              <span className="val-num">02</span>
              <h3>전문적인 부동산<br />개발 및 마케팅</h3>
              <p>
                신뢰도 있는 정보를 바탕으로 고객에게 양질의 서비스를
                제공하기 위해 멈추지 않고 끊임없이 개선하고 도전합니다.
              </p>
            </div>
          </div>

          {/* Value 3 - ALL IN ONE */}
          <div className="val-row">
            <div className="val-img">
              <Image src="/images/about/value3.jpg" alt="ALL IN ONE 솔루션" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="val-text">
              <span className="val-num">03</span>
              <p className="val-badge">ALL IN ONE</p>
              <h3>광고와 분양을 함께 하는<br />독보적인 솔루션</h3>
              <p>
                분양사업부와 광고사업부를 조직하여 각 분야 전문가가 외주 없이 직접 제작하여
                합리적인 가격으로 최상의 퀄리티를 제공할 수 있도록 프로젝트가 진행됩니다.
              </p>
              <p className="val-award">
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
            <div>
              <p className="intro-label">Introduction</p>
              <h2 className="intro-title">
                변화하는 부동산 시장의 흐름을 분석하여
                <br />
                오랜 경험과 노하우를 바탕으로
                <br />
                <strong>최적의 솔루션을 제공합니다.</strong>
              </h2>
            </div>
            <div>
              <p className="intro-desc">
                바론플래닝은 분양사업부와 광고사업부를 함께 운영하는 부동산 개발 종합 서비스 회사입니다.
                20년 이상의 현장 경험을 바탕으로 부동산 컨설팅, 분양대행, 마케팅, 광고 제작까지
                원스톱 솔루션을 제공합니다. 각 분야 최고의 전문가들이 외주 없이 직접 프로젝트를
                수행하여 합리적인 가격으로 최상의 결과를 만들어냅니다.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* CEO Photo - 전체 비율 */}
      <div ref={(el) => addRef(el, 3)} className="main-section">
        <section className="ceo-section">
          <div className="ceo-photo">
            <Image
              src="/images/about/ceo.jpg"
              alt="BARON POWER MEN"
              width={1600}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </section>
      </div>

      {/* History Section */}
      <div ref={(el) => addRef(el, 4)} className="main-section">
        <section className="history-section">
          <div className="history-header">
            <h2 className="history-title">
              우리가 <strong>걸어온 길</strong>
            </h2>
            <p className="history-desc">
              2014년 창립 이래, 바론플래닝은 수도권을 중심으로
              다양한 프로젝트를 성공적으로 수행해왔습니다.
            </p>
          </div>

          <div className="timeline">
            <div className="timeline-line" />

            {historyData.map((yearGroup, yi) => (
              <div key={yi} className="timeline-year-group">
                <div className="timeline-year-label">
                  <span className="timeline-year-badge">
                    {yearGroup.year}
                  </span>
                </div>

                <div className="timeline-items">
                  {yearGroup.items.map((item, ii) => (
                    <div key={ii} className="timeline-card">
                      {item.img && (
                        <div className="timeline-card-img">
                          <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                      )}
                      <div className="timeline-card-body">
                        <h4>{item.title}</h4>
                        {item.role && <p>{item.role}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <div ref={(el) => addRef(el, 5)} className="main-section">
        <section className="cta-section">
          <p className="cta-label">Got a project?</p>
          <h2 className="cta-title">
            전문적인 부동산 개발 및 마케팅으로
            <br />
            <strong>성공적인 신화를 만들어 갑니다.</strong>
          </h2>
        </section>
      </div>
    </div>
  );
}
