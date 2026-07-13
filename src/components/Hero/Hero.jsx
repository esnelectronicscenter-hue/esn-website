import './Hero.css';
import GlareHover from '../GlareHover/GlareHover';

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="glass-container">
        <span className="hero-badge">الخيار الأول للحلول الأمنية</span>
        
        <h1 className="hero-title">
          <span className="highlight">ESN Center</span> <br />
          لأنظمة المراقبة والصوتيات
        </h1>
        
        <p className="hero-subtitle">
          نوفر لك أحدث تقنيات كاميرات المراقبة، أنظمة الدخول، والصوتيات الاحترافية لضمان أمان ورفاهية أعمالك ومنزلك بأعلى معايير الجودة.
        </p>
        
        <div className="hero-actions">
          {/* تم تغليف المكون بـ <a> لجعله قابلاً للنقر والتوجيه */}
          <a href="#products" style={{ textDecoration: 'none', display: 'inline-block' }}>
            <GlareHover
              width="max-content"
              height="auto"
              background="rgba(255, 255, 255, 0.05)" /* تطابق الزجاج */
              borderRadius="40px"
              borderColor="transparent" /* تم تصفير الإطار هنا لأننا نستخدم border-top في Hero.css */
              glareColor="#ffffff" /* لون اللمعة بيضاء */
              glareOpacity={0.4}
              transitionDuration={100}
              className="btn btn-primary" /* تمرير كلاسات الزجاج القديمة لترث الستايل */
            >
              تصفح الكاميرات والمنتجات
            </GlareHover>
          </a>

          {/* الزر الثانوي تركناه كما هو بدون تأثير لتمييز الزر الرئيسي */}
          <a href="#contact" className="btn btn-secondary">احصل على استشارة مجانية</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;