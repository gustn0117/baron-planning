import Image from 'next/image';

export const metadata = {
  title: '분양사업부 - 바론플래닝',
};

const cards = [
  { label: 'CONSULTING', title: '부동산\n컨설팅', img: '/images/sale/card1.jpg' },
  { label: 'MANAGEMENT', title: '분양\n대행 /\n관리', img: '/images/sale/card2.jpg' },
  { label: 'MARKETING', title: '부동산\n마케팅', img: '/images/sale/card3.jpg' },
  { label: 'APPROVAL', title: '모집공고\n승인\n업무', img: '/images/sale/card4.jpg' },
];

export default function SalesPage() {
  return (
    <section className="dept-section" style={{ minHeight: '100vh' }}>
      <div
        className="dept-bg"
        style={{ backgroundImage: 'url(/images/sale/sale-bg.jpg)' }}
      />
      <div className="dept-content">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="dept-label" style={{ textAlign: 'center' }}>Sales Department</p>
          <h1 className="dept-title" style={{ textAlign: 'center' }}><strong>분양사업부</strong></h1>
          <p className="dept-subtitle">Sales Department</p>
          <p className="dept-desc">
            20년 이상의 분양 전문 베테랑으로 구성된 분양의 꽃
            <br />
            분양사업부는 체계적이고 성공적인 분양 신화를 이끌고 있습니다.
          </p>
        </div>
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
