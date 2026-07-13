import LogoLoop from '../LogoLoop/LogoLoop';
import './Footer.css';

const brandLogos = [
  { node: <span className="brand-placeholder">Dahua</span>, title: "Dahua" },
  { node: <span className="brand-placeholder">UNV</span>, title: "UNV" },
  { node: <span className="brand-placeholder">KOCOM</span>, title: "KOCOM" },
  { node: <span className="brand-placeholder">Hikvision</span>, title: "Hikvision" },
  { node: <span className="brand-placeholder">Welion</span>, title: "Welion" },
  { node: <span className="brand-placeholder">Varta</span>, title: "Varta" },
  { node: <span className="brand-placeholder">L-Frank</span>, title: "L-Frank" },
  { node: <span className="brand-placeholder">Boker</span>, title: "Boker" },
];

function Footer() {
  return (
    <footer className="glass-footer">
      <div className="footer-brands-wrapper">
        <LogoLoop
          logos={brandLogos}
          speed={80}
          direction="right"
          logoHeight={40}
          gap={80}
          hoverSpeed={10}
          scaleOnHover={true}
          fadeOut={false} /* 👈 تم تعطيل التلاشي هنا لنستخدم الـ CSS Mask بدلاً منه */
        />
      </div>

      <div className="footer-content">
        {/* العمود الأول: الخريطة فقط بعد إزالة اللوجو */}
        <div className="footer-col about-col">
          <div className="contact-info">
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d804.8256479857405!2d37.15297493036902!3d36.20783948038642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff86a29531181%3A0x22c9221f96675274!2z2K3ZhNmI2YrYp9iqINin2YTZhdit2KfZitix2Yo!5e0!3m2!1sar!2str!4v1783866785497!5m2!1sar!2str" 
                width="100%" 
                height="200" 
                style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',border: '1px solid rgba(255, 255, 255, 0.2)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin">
              </iframe>
            </div>
          </div>
        </div>

        {/* العمود الثاني: الجوال والبريد بدون أيقونات */}
        <div className="footer-col" id="contact">
          <h4>تواصل معنا</h4>
          <ul>
            <p>الجوال:</p>
            <li><a href="tel:963981095555">963981095555+</a></li>
            <p>البريد:</p>
            <li><a href="mailto:esn.electronicscenter@gmail.com">esn.electronicscenter@gmail.com</a></li>
          </ul>
        </div>

        {/* العمود الثالث: الروابط */}
        <div className="footer-col">
          <h4>روابط مفيدة</h4>
          <ul>
            <li><a href="privacy-policy.html">سياسة الخصوصية</a></li>
            <li><a href="terms-and-conditions.html">الشروط والأحكام</a></li>
          </ul>
        </div>

        {/* العمود الرابع: السوشيال ميديا */}
        <div className="footer-col">
          <h4>تابعنا على</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/esn_center/" aria-label="Instagram"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="https://www.facebook.com/esncenter" aria-label="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>جميع الحقوق محفوظة لشركة ESN Center © 2026</p>
      </div>
    </footer>
  );
}

export default Footer;