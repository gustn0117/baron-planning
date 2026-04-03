import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: '사업실적 - 바론플래닝',
};

const projects = [
  // Page 1
  { title: '개봉 해피트리 앤 루브루', desc: '2024 | 서울 구로구 | 아파트 295세대', img: '/images/result/portfolio1.jpg', slug: 'happytree' },
  { title: '부천 브라운스톤 여월', desc: '2023 | 경기도 부천시 | 아파트 142세대', img: '/images/result/portfolio2.jpg', slug: 'brownstone-yeowol' },
  { title: '부천 이안 시그니처 역곡', desc: '2022 | 경기도 부천시 | 아파트 99세대', img: '/images/result/portfolio3.jpg', slug: 'ian-signature' },
  // Page 2
  { title: '부천 브라운스톤 원종', desc: '2022 | 경기도 부천시 | 아파트 137세대', img: '/images/result/portfolio-p2-1.jpg', slug: 'brownstone-wonjong' },
  { title: '송추 북한산 경남 아너스빌', desc: '2020 | 경기도 양주시 | 아파트 604세대', img: '/images/result/portfolio-p2-2.png', slug: 'honorsville' },
  { title: '김포 캐슬 앤 파밀리에 시티', desc: '2020 | 경기도 김포시 | 상가 36호실', img: '/images/result/portfolio-p2-3.jpg', slug: 'castle-familier' },
  // Page 3
  { title: '동탄 그란비아스타', desc: '2020 | 경기도 화성시 | 복합시설 150호실', img: '/images/result/portfolio-p3-1.jpg', slug: 'granviastar' },
  { title: '청주 비하동 대광로제비앙 1, 2차', desc: '2019 | 충북 청주시 | 아파트 528세대', img: '/images/result/portfolio-p3-2.png', slug: 'rogevian' },
  { title: '광교 대광 로제비앙', desc: '2018 | 경기도 수원시 | 아파트 103세대', img: '/images/result/portfolio-p3-3.jpg', slug: 'gwanggyo-rogevian' },
  // Page 4
  { title: '동탄서해그랑블', desc: '2015 | 경기도 화성시 | 상가 30호실', img: '/images/result/portfolio-p4-1.jpg', slug: 'seohae-grandble' },
  { title: '동탄 퍼스트프라자', desc: '2015 | 경기도 화성시 | 상가 61호실', img: '/images/result/portfolio-p4-2.jpg', slug: 'first-plaza' },
  { title: '동탄 라마다호텔', desc: '2014 | 경기도 화성시 | 호텔 117호실', img: '/images/result/portfolio-p4-3.png', slug: 'ramada-hotel' },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Banner */}
      <div
        className="portfolio-header-bg"
        style={{ backgroundImage: 'url(/images/result/result-bg.jpg)' }}
      >
        <div className="content">
          <h1>
            전문적인 부동산 개발과 마케팅 전략으로
            <br />
            성공적인 신화를 만들어 갑니다.
          </h1>
        </div>
      </div>

      {/* Section Title */}
      <div style={{ textAlign: 'center', padding: '80px 40px 20px' }}>
        <p style={{ color: 'var(--primary)', fontSize: '16px', marginBottom: '10px' }}>
          자신의 분야 최고에 도전하는
        </p>
        <h2 style={{ fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase' }}>
          <span style={{ color: 'var(--text-light)' }}>our</span>{' '}
          <span style={{ fontWeight: 700 }}>PROJECT</span>
        </h2>
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {projects.map((project, i) => (
          <Link key={i} href={`/portfolio/${project.slug}`} className="portfolio-item">
            <Image
              src={project.img}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="portfolio-item-overlay">
              <h3 className="portfolio-item-title">{project.title}</h3>
              <p className="portfolio-item-desc">{project.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <span style={{ opacity: 0.3 }}>&#8249;</span>
        <span className="active">1</span>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <span>&#8250;</span>
      </div>
    </>
  );
}
