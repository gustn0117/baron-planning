import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info">
          <h4>BARON PLANNING</h4>
          <p>
            서울 구로구 부광로 88 SK V1센터 A동 609호
            <br />
            <a href="mailto:baronplanning@gmail.com">baronplanning@gmail.com</a>
          </p>
          <p style={{ marginTop: '12px' }}>
            TEL. 1599-2842 &nbsp;|&nbsp; FAX. 0303-3444-4606
          </p>
        </div>
        <div className="footer-copyright">
          <span>BARONPLANNING</span>
          COPYRIGHT (C) BARONPLANNING. ALL RIGHT RESERVED.
        </div>
      </div>
    </footer>
  );
}
