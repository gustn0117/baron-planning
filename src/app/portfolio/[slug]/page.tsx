import Link from 'next/link';
import Image from 'next/image';

interface ProjectData {
  title: string;
  shortTitle: string;
  bgImg: string;
  logoImg?: string;
  galleryImgs: string[];
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
  videos: { title: string; youtubeId: string }[];
  sections: string[];
}

const projectsData: Record<string, ProjectData> = {
  happytree: {
    title: '개봉 해피트리 앤 루브루',
    shortTitle: '해피트리 앤 루브루',
    bgImg: '/images/result/detail/happytree-hero.jpg',
    logoImg: '/images/result/detail/happytree-logo.png',
    galleryImgs: ['/images/result/detail/happytree-gallery.jpg'],
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
    videos: [
      { title: '외부 조감 단지 영상', youtubeId: 'G059CsD3fpM' },
      { title: '3D 인테리어 영상', youtubeId: '-n0IWcBCCTQ' },
    ],
    sections: ['외부 조감 단지 영상', '3D 인테리어 영상', '홍보관'],
  },
  'brownstone-yeowol': {
    title: '부천 브라운스톤 여월',
    shortTitle: '브라운스톤 여월',
    bgImg: '/images/result/detail/brownstone-yeowol-hero.jpg',
    logoImg: '/images/result/detail/brownstone-yeowol-logo.png',
    galleryImgs: ['/images/result/detail/brownstone-yeowol-gallery.jpg'],
    location: '경기도 부천시 여월동 9-29번지 일원',
    structure: '철근콘크리트구조',
    landArea: '4,747.30㎡',
    buildArea: '1,570.39㎡',
    totalArea: '19,238.06㎡',
    coverage: '33.08%',
    scale: '지하 2층~지상 13층 142세대',
    types: '26(4)/ 59A(30)/ 59B(10)/ 59C(12)/ 74(24)/ 84(33)',
    floorRatio: '249.96%',
    parking: '144대',
    videos: [
      { title: '외부 조감 단지 영상', youtubeId: 'rD-kk75Scu8' },
      { title: '3D 인테리어 영상', youtubeId: 'wzkrrpiqS7M' },
    ],
    sections: ['외부 조감 단지 영상', '2D 제작물', '3D 인테리어 영상', '홍보관'],
  },
  'ian-signature': {
    title: '부천 이안 시그니처 역곡',
    shortTitle: '역곡 이안',
    bgImg: '/images/result/detail/ian-signature-hero.jpg',
    logoImg: '/images/result/detail/ian-signature-logo.png',
    galleryImgs: ['/images/result/detail/ian-signature-gallery1.jpg', '/images/result/detail/ian-signature-gallery2.jpg'],
    location: '경기도 부천시 소사구 괴안동 117번지',
    structure: '철근콘크리트구조',
    landArea: '3,646.00㎡',
    buildArea: '1,292.50㎡',
    totalArea: '14,932.54㎡',
    coverage: '35.45%',
    scale: '지하 2층~지상 16층',
    types: '50(14)/ 60(14)/ 63(14)/ 65(16)/ 70(15)/ 72(15)/ 81(11)',
    floorRatio: '249.80%',
    parking: '159대',
    videos: [
      { title: '외부 조감 단지 영상', youtubeId: 'P-zTtC0JhPA' },
      { title: '3D 인테리어 영상', youtubeId: 'jrOaLi126Ro' },
    ],
    sections: ['외부 조감 단지 영상', '2D 제작물', '3D 인테리어 영상', '홍보관'],
  },
  'brownstone-wonjong': {
    title: '부천 브라운스톤 원종',
    shortTitle: '브라운스톤 원종',
    bgImg: '/images/result/detail/brownstone-wonjong-hero.jpg',
    galleryImgs: ['/images/result/detail/brownstone-wonjong-gallery1.jpg', '/images/result/detail/brownstone-wonjong-gallery2.jpg'],
    location: '경기도 부천시 원종동',
    structure: '철근콘크리트구조',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '아파트 137세대',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [
      { title: '외부 조감 단지 영상', youtubeId: '77ymfpGIJvs' },
      { title: '3D 인테리어 영상', youtubeId: 'DAep-7iefSE' },
    ],
    sections: ['외부 조감 단지 영상', '2D 제작물', '3D 인테리어 영상', '홍보관'],
  },
  honorsville: {
    title: '송추 북한산 경남 아너스빌',
    shortTitle: '경남 아너스빌',
    bgImg: '/images/result/detail/honorsville-hero.jpg',
    galleryImgs: [],
    location: '경기도 양주시 장흥면',
    structure: '철근콘크리트구조',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '아파트 604세대',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  'castle-familier': {
    title: '김포 캐슬 앤 파밀리에 시티',
    shortTitle: '캐슬 앤 파밀리에',
    bgImg: '/images/result/detail/castle-familier-hero.png',
    galleryImgs: [],
    location: '경기도 김포시',
    structure: '-',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '상가 36호실',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  granviastar: {
    title: '동탄 그란비아스타',
    shortTitle: '그란비아스타',
    bgImg: '/images/result/detail/granviastar-hero.jpg',
    galleryImgs: [],
    location: '경기도 화성시 동탄',
    structure: '-',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '복합시설 150호실',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  rogevian: {
    title: '청주 비하동 대광로제비앙 1, 2차',
    shortTitle: '대광로제비앙',
    bgImg: '/images/result/detail/rogevian-hero.png',
    galleryImgs: [],
    location: '충북 청주시 비하동',
    structure: '철근콘크리트구조',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '아파트 528세대',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  'gwanggyo-rogevian': {
    title: '광교 대광 로제비앙',
    shortTitle: '대광 로제비앙',
    bgImg: '/images/result/detail/gwanggyo-hero.jpg',
    galleryImgs: [],
    location: '경기도 수원시 광교',
    structure: '철근콘크리트구조',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '아파트 103세대',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  'seohae-grandble': {
    title: '동탄서해그랑블',
    shortTitle: '서해그랑블',
    bgImg: '/images/result/detail/seohae-hero.jpg',
    galleryImgs: [],
    location: '경기도 화성시 동탄',
    structure: '-',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '상가 30호실',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  'first-plaza': {
    title: '동탄 퍼스트프라자',
    shortTitle: '퍼스트프라자',
    bgImg: '/images/result/detail/first-plaza-hero.jpg',
    galleryImgs: [],
    location: '경기도 화성시 동탄',
    structure: '-',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '상가 61호실',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  'ramada-hotel': {
    title: '동탄 라마다호텔',
    shortTitle: '라마다호텔',
    bgImg: '/images/result/detail/ramada-hero.png',
    galleryImgs: [],
    location: '경기도 화성시 동탄',
    structure: '-',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '호텔 117호실',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
};

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>프로젝트를 찾을 수 없습니다.</h1>
        <Link href="/portfolio" className="portfolio-link">← 목록으로 돌아가기</Link>
      </div>
    );
  }

  const hasTable = project.landArea !== '-';

  return (
    <>
      {/* Hero */}
      <div
        className="detail-hero"
        style={{ backgroundImage: `url(${project.bgImg})` }}
      >
        <div className="detail-hero-content">
          <p className="detail-label">분양현장</p>
          <h1 className="detail-title"><strong>{project.title}</strong></h1>
        </div>
      </div>

      {/* Logo */}
      {project.logoImg && (
        <div style={{ textAlign: 'center', padding: '40px 20px 0' }}>
          <Image
            src={project.logoImg}
            alt={`${project.title} 로고`}
            width={300}
            height={120}
            style={{ maxWidth: '300px', height: 'auto' }}
          />
        </div>
      )}

      {/* Project Info Table */}
      {hasTable && (
        <div className="detail-table">
          <h2>{project.shortTitle}</h2>
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
        </div>
      )}

      {/* Video Sections */}
      {project.videos.length > 0 && (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
          {project.videos.map((video, i) => (
            <div key={i} style={{ marginBottom: '60px' }}>
              <h3 style={{
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '24px',
                padding: '12px 32px',
                background: 'var(--primary)',
                color: 'white',
                borderRadius: '30px',
                display: 'inline-block',
                width: 'auto',
                margin: '0 auto 24px',
              }}>
                <span style={{ display: 'block', textAlign: 'center' }}>{video.title}</span>
              </h3>
              <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?wmode=opaque`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Gallery Images */}
      {project.galleryImgs.length > 0 && (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px 60px' }}>
          {project.sections.includes('홍보관') && (
            <h3 style={{
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: 700,
              marginBottom: '24px',
              padding: '12px 32px',
              background: 'var(--primary)',
              color: 'white',
              borderRadius: '30px',
              display: 'table',
              margin: '0 auto 24px',
            }}>
              홍보관
            </h3>
          )}
          {project.galleryImgs.map((img, i) => (
            <div key={i} style={{ marginBottom: '20px', borderRadius: '12px', overflow: 'hidden' }}>
              <Image
                src={img}
                alt={`${project.title} 이미지 ${i + 1}`}
                width={900}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>
      )}

      {/* Back Link */}
      <div style={{ textAlign: 'center', padding: '40px 20px 80px' }}>
        <Link href="/portfolio" className="portfolio-link">
          ← 목록으로 돌아가기
        </Link>
      </div>
    </>
  );
}
