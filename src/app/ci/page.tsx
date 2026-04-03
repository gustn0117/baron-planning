import Image from 'next/image';

export const metadata = {
  title: 'CI - 바론플래닝',
};

export default function CIPage() {
  return (
    <div style={{ paddingTop: '90px' }}>
      <section className="ci-section">
        <div className="ci-image-wrapper">
          <Image
            src="/images/ci/ci-page1.jpg"
            alt="COMPANY SYMBOL - 바론플래닝 CI"
            width={1920}
            height={1080}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
          <Image
            src="/images/ci/ci-page2.jpg"
            alt="Typo Ratio & Symbol Type - 바론플래닝 CI"
            width={1920}
            height={1080}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>
    </div>
  );
}
