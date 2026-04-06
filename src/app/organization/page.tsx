'use client';

import { useEffect, useRef } from 'react';

const orgData = [
  {
    name: '경영 관리부',
    nameEn: 'Management HQ',
    teams: [
      { name: '재무팀', nameEn: 'Finance', tasks: ['수지계획 수립', '세부자금 운용계획'] },
      { name: '업무지원팀', nameEn: 'Support', tasks: ['세부관리 계획', '계약 관리 / 지원'] },
    ],
  },
  {
    name: '분양 사업부',
    nameEn: 'Development HQ',
    teams: [
      { name: '분양영업팀', nameEn: 'Sales', tasks: ['시장환경 조사 및 사업성 분석', '개발계획 수립 및 적정분양가 책정', '마케팅 및 운영전략 제안'] },
      { name: '분양기획팀', nameEn: 'Planning', tasks: ['분양목표수립, 일정공고 및 분양개시', '계약 및 사후관리', '입주관리 및 사후 운영 제안'] },
    ],
  },
  {
    name: '광고 기획부',
    nameEn: 'Advertising HQ',
    teams: [
      { name: '전략기획팀', nameEn: 'Strategy', tasks: ['홍보 및 광고컨텐츠 기획', '홍보관 및 모델하우스 설계', '온·오프라인광고 기획 및 진행'] },
      { name: '광고제작팀', nameEn: 'Production', tasks: ['인쇄물 및 홈페이지 제작', '조감도, 3D 컨텐츠 및 영상물 제작', 'VR 사이버모델하우스 론칭 제작'] },
    ],
  },
];

export default function OrganizationPage() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );
    if (chartRef.current) {
      chartRef.current.querySelectorAll('.org-fade').forEach((el) => {
        observer.observe(el);
      });
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ paddingTop: '100px' }}>
      <section className="org-section">
        <div className="org-header">
          <div>
            <h1 className="org-title"><strong>Organization</strong></h1>
            <p className="org-subtitle">조직구성</p>
          </div>
          <p className="org-description">
            해당 분야에 대한 전문적인 지식과 구성원 개개인의 신뢰할 수 있는 정직한 마음, 고객이 원하는 방향을
            중심으로 문제를 해결하려는 뜨거운 열정들이 한 곳에 모였습니다.
          </p>
        </div>

        <div className="oc" ref={chartRef}>
          {/* CEO */}
          <div className="oc-top org-fade">
            <div className="oc-ceo">
              <span className="oc-ceo-label">CEO</span>
            </div>
            <div className="oc-connector-v" />
            <div className="oc-connector-h" />
          </div>

          {/* 3 Departments side by side */}
          <div className="oc-depts org-fade">
            {orgData.map((dept, di) => (
              <div key={di} className="oc-dept-col">
                {/* Connector top */}
                <div className="oc-col-line" />

                {/* Dept pill */}
                <div className="oc-dept-pill">
                  <strong>{dept.name}</strong>
                  <span>{dept.nameEn}</span>
                </div>

                {/* Teams under dept */}
                <div className="oc-col-teams">
                  {dept.teams.map((team, ti) => (
                    <div key={ti} className="oc-col-team org-fade">
                      <div className="oc-team-dot" />
                      <div className="oc-team-head">
                        <strong>{team.name}</strong>
                        <span>{team.nameEn}</span>
                      </div>
                      <ul className="oc-task-items">
                        {team.tasks.map((task, tki) => (
                          <li key={tki}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
