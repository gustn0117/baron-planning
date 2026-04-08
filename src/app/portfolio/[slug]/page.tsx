import Link from 'next/link';
import Image from 'next/image';

interface TableData {
  label: string;
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
}

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
  design2dImgs?: string[];
  videos: { title: string; youtubeId: string }[];
  sections: string[];
  extraTables?: TableData[];
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
    galleryImgs: ['/images/result/detail/ian-signature-gallery1.jpg'],
    design2dImgs: ['/images/result/detail/ian-signature-gallery2.jpg'],
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
    galleryImgs: ['/images/result/detail/brownstone-wonjong-gallery1.jpg'],
    design2dImgs: ['/images/result/detail/brownstone-wonjong-gallery2.jpg'],
    location: '-',
    structure: '-',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '-',
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
    shortTitle: '송추 북한산 경남 아너스빌',
    bgImg: '/images/result/detail/honorsville-hero.jpg',
    galleryImgs: ['/images/result/detail/honorsville-hero.jpg'],
    location: '경기도 양주시 장흥면 부곡리 524-2번지',
    structure: '철근콘크리트구조',
    landArea: '19,883㎡',
    buildArea: '4,709.57㎡',
    totalArea: '82,952.43㎡',
    coverage: '19%',
    scale: '지하2층~지상24층 8개동 / 604세대',
    types: '63A/ 63B/ 73A/ 73B',
    floorRatio: '228.24%',
    parking: '765대',
    videos: [],
    sections: [],
  },
  'castle-familier': {
    title: '김포 캐슬 앤 파밀리에 시티',
    shortTitle: '김포 캐슬 앤 파밀리에 시티 상가',
    bgImg: '/images/result/detail/castle-familier-hero.png',
    galleryImgs: ['/images/result/detail/castle-familier-gallery.png'],
    location: '경기 김포시 고촌읍 인항로 92-111',
    structure: '철근콘크리트구조',
    landArea: '-',
    buildArea: '-',
    totalArea: '-',
    coverage: '-',
    scale: '36개동 / 2,255세대',
    types: '-',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  granviastar: {
    title: '동탄 그란비아스타',
    shortTitle: '동탄 그란비아스타',
    bgImg: '/images/result/detail/granviastar-hero.jpg',
    galleryImgs: ['/images/result/detail/granviastar-gallery.jpg'],
    location: '화성시 동탄대로 446',
    structure: '철근콘크리트구조',
    landArea: '17,285.00㎡',
    buildArea: '8,455.65㎡',
    totalArea: '91,160.82㎡',
    coverage: '49%',
    scale: '지하4층~지상8층 / 364세대',
    types: '-',
    floorRatio: '237%',
    parking: '559대',
    videos: [],
    sections: [],
  },
  rogevian: {
    title: '청주 비하동 대광로제비앙 1, 2차',
    shortTitle: '청주 비하동 대광로제비앙 1차',
    bgImg: '/images/result/detail/rogevian-hero.png',
    galleryImgs: ['/images/result/detail/rogevian-hero.png'],
    location: '충청북도 청주시 흥덕구 비하동 823',
    structure: '철근콘크리트구조',
    landArea: '21,312.8㎡',
    buildArea: '4,003.10㎡',
    totalArea: '60,453.02㎡',
    coverage: '18.78%',
    scale: '지하1층~지상27층 6개동 / 418세대',
    types: '112A / 112B',
    floorRatio: '222%',
    parking: '547대',
    videos: [],
    sections: [],
    extraTables: [{
      label: '청주 비하동 대광로제비앙 2차',
      location: '충청북도 청주시 흥덕구 비하동 819',
      structure: '철근콘크리트구조',
      landArea: '5,422.8㎡',
      buildArea: '923.24㎡',
      totalArea: '16,870.29',
      coverage: '17%',
      scale: '지하1층~지상24층 3개동',
      types: '111A / 111B',
      floorRatio: '229%',
      parking: '145대',
    }],
  },
  'gwanggyo-rogevian': {
    title: '광교 대광 로제비앙',
    shortTitle: '광교 대광로제비앙',
    bgImg: '/images/result/detail/gwanggyo-hero.jpg',
    galleryImgs: ['/images/result/detail/gwanggyo-gallery.jpg'],
    location: '광교신도시 택지개발지구 A1 BL',
    structure: '철근콘크리트벽식구조',
    landArea: '19,883㎡',
    buildArea: '4,498㎡',
    totalArea: '26,869㎡',
    coverage: '22.62%',
    scale: '지하2층~지상5층 10개동 / 145세대',
    types: '84.52(105세대) / 84.64(40세대)',
    floorRatio: '79.82%',
    parking: '238대',
    videos: [],
    sections: [],
  },
  'seohae-grandble': {
    title: '동탄서해그랑블',
    shortTitle: '동탄 서해 그랑블',
    bgImg: '/images/result/detail/seohae-hero.jpg',
    galleryImgs: ['/images/result/detail/seohae-gallery.jpg'],
    location: '화성시 동탄신도시 15.-, 18-4, 23-6블럭',
    structure: '철근콘크리트구조',
    landArea: '-',
    buildArea: '80,769㎡',
    totalArea: '-',
    coverage: '-',
    scale: '지하6층~지상36층 3개동',
    types: '41(60)/ 42(122)/ 43(7)/ 49(7)/ 57(12)/ 60(12)',
    floorRatio: '-',
    parking: '-',
    videos: [],
    sections: [],
  },
  'first-plaza': {
    title: '동탄 퍼스트프라자',
    shortTitle: '동탄 퍼스트프라자',
    bgImg: '/images/result/detail/first-plaza-hero.jpg',
    galleryImgs: ['/images/result/detail/first-plaza-gallery.jpg'],
    location: '화성시 오산동 968-2',
    structure: '철근콘크리트구조',
    landArea: '1,490.9㎡',
    buildArea: '1,011.73㎡',
    totalArea: '12,903.52㎡',
    coverage: '67.86%',
    scale: '지하3층~지상10층',
    types: '-',
    floorRatio: '599.1%',
    parking: '82대',
    videos: [],
    sections: [],
  },
  'ramada-hotel': {
    title: '동탄 라마다호텔',
    shortTitle: '라마다호텔',
    bgImg: '/images/result/detail/ramada-hero.png',
    logoImg: '/images/result/detail/ramada-logo.png',
    galleryImgs: ['/images/result/detail/ramada-gallery.png'],
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

  const hasTable = project.location !== '-' && project.location !== '';

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

      {/* Project Info Table */}
      {hasTable && (
        <div className="detail-info">
          <h2 className="detail-info-title">{project.shortTitle}</h2>
          <div className="detail-info-grid">
            {[
              { label: '대지위치', value: project.location },
              { label: '구조', value: project.structure },
              { label: '대지면적', value: project.landArea },
              { label: '규모', value: project.scale },
              { label: '건축면적', value: project.buildArea },
              { label: '공급평형', value: project.types },
              { label: '연면적', value: project.totalArea },
              { label: '용적률', value: project.floorRatio },
              { label: '건폐율', value: project.coverage },
              { label: '주차대수', value: project.parking },
            ].map((item, i) => (
              <div key={i} className="detail-info-item">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Extra Tables (e.g. 2차) */}
      {project.extraTables?.map((table, ti) => (
        <div key={ti} className="detail-info">
          <h2 className="detail-info-title">{table.label}</h2>
          <div className="detail-info-grid">
            {[
              { label: '대지위치', value: table.location },
              { label: '구조', value: table.structure },
              { label: '대지면적', value: table.landArea },
              { label: '규모', value: table.scale },
              { label: '건축면적', value: table.buildArea },
              { label: '공급평형', value: table.types },
              { label: '연면적', value: table.totalArea },
              { label: '용적률', value: table.floorRatio },
              { label: '건폐율', value: table.coverage },
              { label: '주차대수', value: table.parking },
            ].map((item, i) => (
              <div key={i} className="detail-info-item">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      ))}

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

      {/* Video Sections */}
      {project.videos.length > 0 && (
        <div className="detail-media">
          {project.videos.map((video, i) => (
            <div key={i} className="detail-video-block">
              <p className="detail-section-label">{video.title}</p>
              <div className="detail-video-wrap">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?wmode=opaque`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 2D 제작물 */}
      {project.design2dImgs && project.design2dImgs.length > 0 && (
        <div className="detail-media">
          <p className="detail-section-label">2D 제작물</p>
          <div className="detail-gallery">
            {project.design2dImgs.map((img, i) => (
              <div key={i} className="detail-gallery-item">
                <Image
                  src={img}
                  alt={`${project.title} 2D 제작물 ${i + 1}`}
                  width={1200}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery Images */}
      {project.galleryImgs.length > 0 && (
        <div className="detail-media">
          {project.sections.includes('홍보관') && (
            <p className="detail-section-label">홍보관</p>
          )}
          <div className="detail-gallery">
            {project.galleryImgs.map((img, i) => (
              <div key={i} className="detail-gallery-item">
                <Image
                  src={img}
                  alt={`${project.title} 이미지 ${i + 1}`}
                  width={1200}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
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
