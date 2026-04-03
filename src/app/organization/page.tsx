import Image from 'next/image';

export const metadata = {
  title: '조직도 - 바론플래닝',
};

export default function OrganizationPage() {
  return (
    <div style={{ paddingTop: '90px' }}>
      <section className="org-section">
        <div className="org-header">
          <div>
            <h1 className="org-title">Organization</h1>
            <p className="org-subtitle">조직구성</p>
          </div>
          <p className="org-description">
            해당 분야에 대한 전문적인 지식과 구성원 개개인의 신뢰할 수 있는 정직한 마음, 고객이 원하는 방향을
            중심으로 문제를 해결하려는 뜨거운 열정들이 한 곳에 모였습니다. 분야별 전문가들의 탁월한 기술력과
            견고한 조직력으로 고객의 기대를 뛰어넘는 프로젝트를 만들도록 지속적으로 노력하겠습니다.
          </p>
        </div>
        <div className="org-chart-wrapper">
          <Image
            src="/images/org/org-chart.jpg"
            alt="바론플래닝 조직도"
            width={1920}
            height={1358}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>
    </div>
  );
}
