import Image from 'next/image';

export const metadata = {
  title: '광고사업부 - 바론플래닝',
};

const cards = [
  { label: 'ADVERTISING', title: '사이버\n모델하우스', img: '/images/ad/card1.jpg' },
  { label: 'ADVERTISING', title: '분양광고\n디자인', img: '/images/ad/card2.jpg' },
  { label: 'ADVERTISING', title: '온라인\n마케팅', img: '/images/ad/card3.jpg' },
  { label: 'ADVERTISING', title: '홈페이지\n제작', img: '/images/ad/card4.jpg' },
];

export default function AdvertisingPage() {
  return (
    <section className="dept-section" style={{ minHeight: '100vh' }}>
      <div
        className="dept-bg"
        style={{ backgroundImage: 'url(/images/ad/ad-bg.jpg)' }}
      />
      <div className="dept-content">
        <h1 className="dept-title">광고사업부</h1>
        <p className="dept-subtitle">Advertising Department</p>
        <p className="dept-desc">
          광고 전문팀을 구성한 바론플래닝은
          <br />
          분양에 필요한 2D, 3D 광고 컨텐츠를 자체 제작하고 있습니다.
        </p>
        <div className="dept-cards">
          {cards.map((card, i) => (
            <div key={i} className="dept-card">
              <Image
                src={card.img}
                alt={card.title.replace(/\n/g, ' ')}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="dept-card-overlay">
                <span className="dept-card-label">{card.label}</span>
                <h3 className="dept-card-title" style={{ whiteSpace: 'pre-line' }}>
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
