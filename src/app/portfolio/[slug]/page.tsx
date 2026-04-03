import Image from 'next/image';
import Link from 'next/link';

const projectsData: Record<string, {
  title: string;
  bgImg: string;
  location: string;
  structure: string;
  landArea: string;
  buildArea: string;
  totalArea: string;
  coverage: string;
  scale: string;
  types: string;
  floorRatio: string;
  parking: string;
}> = {
  happytree: {
    title: '개봉 해피트리 앤 루브루',
    bgImg: '/images/result/project1-bg.jpg',
    location: '서울시 구로구 개봉동 312-38, 369-1',
    structure: '철근콘크리트구조',
    landArea: '8,861.10㎡',
    buildArea: '2,794.36㎡',
    totalArea: '334,411.85㎡',
    coverage: '31.54%',
    scale: '지하 3층~지상 15층 295세대',
    types: '37(5)/ 42A(55)/ 42B(64)/ 42C(20)\n52(26)/ 59A(83)/ 59B(28)/ 59C(1)/ 84(13)',
    floorRatio: '249.94%',
    parking: '297대',
  },
  brownstone: {
    title: '부천 브라운스톤 여월',
    bgImg: '/images/result/portfolio2.jpg',
    location: '경기도 부천시 여월동',
    structure: '철근콘크리트구조',
    landArea: '5,200.00㎡',
    buildArea: '1,560.00㎡',
    totalArea: '42,000.00㎡',
    coverage: '30.00%',
    scale: '지하 2층~지상 20층 142세대',
    types: '59A(40)/ 59B(32)/ 84A(40)/ 84B(30)',
    floorRatio: '249.00%',
    parking: '152대',
  },
};

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug] || projectsData.happytree;

  return (
    <>
      {/* Hero */}
      <div
        className="detail-hero"
        style={{ backgroundImage: `url(${project.bgImg})` }}
      >
        <div className="detail-hero-content">
          <p className="detail-label">분양현장</p>
          <h1 className="detail-title">{project.title}</h1>
        </div>
      </div>

      {/* Project Info Table */}
      <div className="detail-table">
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '30px' }}>
          {project.title}
        </h2>
        <table>
          <tbody>
            <tr>
              <th>대지위치</th>
              <td>{project.location}</td>
              <th>구조</th>
              <td>{project.structure}</td>
            </tr>
            <tr>
              <th>대지면적</th>
              <td>{project.landArea}</td>
              <th>규모</th>
              <td>{project.scale}</td>
            </tr>
            <tr>
              <th>건축면적</th>
              <td>{project.buildArea}</td>
              <th>공급평형</th>
              <td style={{ whiteSpace: 'pre-line' }}>{project.types}</td>
            </tr>
            <tr>
              <th>연면적</th>
              <td>{project.totalArea}</td>
              <th>용적률</th>
              <td>{project.floorRatio}</td>
            </tr>
            <tr>
              <th>건폐율</th>
              <td>{project.coverage}</td>
              <th>주차대수</th>
              <td>{project.parking}</td>
            </tr>
          </tbody>
        </table>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/portfolio" className="portfolio-link">
            ← 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </>
  );
}
