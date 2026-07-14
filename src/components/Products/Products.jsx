import { useState, useRef, useEffect } from 'react';
import SpotlightCard from './../SpotlightCard/SpotlightCard';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: 'كاميرا مراقبة خارجية',
    brand: 'Hikvision',
    category: 'cameras',
    price: 45,
    image: 'https://via.placeholder.com/400x300/1a1f2e/ffffff?text=Camera+Image',
    description: '2 ميجابكسل (Full HD) تعمل على جميع أنواع الـ DVR (قديم وحديث). رؤية ليلية صافية بدون "نغبشة" وتبديل تلقائي بين النهار والليل. ميكروفون مدمج ينقل الصوت بدون أسلاك إضافية. (IP67) مقاومة كاملة للمطر والغبار. قائمة إعدادات داخلية للتحكم بالألوان واللغات بسهولة.',
  },
  {
    id: 2,
    name: 'شاشة انتركم منزلي',
    brand: 'KOCOM',
    category: 'intercom',
    price: 120,
    image: 'https://via.placeholder.com/400x300/1a1f2e/ffffff?text=Intercom+Image',
    description: 'شاشة 7 بوصة ملونة عالية الوضوح مع إمكانية التحدث وفتح الباب عن بعد. تصميم زجاجي أنيق يناسب الديكورات الحديثة، مع دعم ربط كاميرات إضافية للمراقبة المزدوجة وميزة تسجيل الزوار.',
  },
  {
    id: 3,
    name: 'سماعة سقفية احترافية',
    brand: 'L-Frank',
    category: 'audio',
    price: 35,
    image: 'https://via.placeholder.com/400x300/1a1f2e/ffffff?text=Audio+System',
    description: 'سماعات سقفية مدمجة باستطاعة 10W توفر صوتاً نقياً وتوزيعاً مثالياً للمساحات الواسعة. تصميم مخفي ومقاوم للرطوبة، مثالية للشركات والمراكز التجارية.',
  },
  {
    id: 4,
    name: 'كاميرا داخلية متحركة',
    brand: 'Dahua',
    category: 'cameras',
    price: 55,
    image: 'https://via.placeholder.com/400x300/1a1f2e/ffffff?text=PTZ+Camera',
    description: 'كاميرا واي فاي متحركة 360 درجة، مثالية لمراقبة الأطفال والمكاتب من خلال الجوال.',
  }
];

// --- مكون القائمة المنسدلة ---
const CustomDropdown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div className="glass-input dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption ? selectedOption.label : ''}</span>
        <svg className={`dropdown-arrow ${isOpen ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((opt) => (
            <div 
              key={opt.value} 
              className={`dropdown-item ${value === opt.value ? 'selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function Products({ onAddToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addedToCartId, setAddedToCartId] = useState(null);
  
  // حالة المفضلة (مصفوفة تحتوي على أرقام المنتجات المفضلة)
  const [favorites, setFavorites] = useState([]);
  
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBrand, setActiveBrand] = useState('all');
  const [maxPrice, setMaxPrice] = useState(300);

  const categoryOptions = [
    { label: 'جميع الأنواع', value: 'all' },
    { label: 'كاميرات المراقبة', value: 'cameras' },
    { label: 'أنظمة الانتركم', value: 'intercom' },
    { label: 'الصوتيات', value: 'audio' }
  ];

  const brandOptions = [
    { label: 'جميع الماركات', value: 'all' },
    { label: 'Hikvision', value: 'Hikvision' },
    { label: 'Dahua', value: 'Dahua' },
    { label: 'KOCOM', value: 'KOCOM' },
    { label: 'L-Frank', value: 'L-Frank' }
  ];

  const filteredProducts = productsData.filter(product => {
    const matchCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchBrand = activeBrand === 'all' || product.brand === activeBrand;
    const matchPrice = product.price <= maxPrice;
    return matchCategory && matchBrand && matchPrice;
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden';
    setAddedToCartId(null);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const handleAddToCart = (product) => {
    if (onAddToCart) onAddToCart(product);
    setAddedToCartId(product.id);
    setTimeout(() => {
      closeModal();
      setAddedToCartId(null);
    }, 1200);
  };

  // دالة إضافة/إزالة من المفضلة
  const toggleFavorite = (e, productId) => {
    e.stopPropagation(); // لمنع فتح النافذة المنبثقة عند الضغط على القلب
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  // دالة المشاركة
  const handleShare = (e, product) => {
    e.stopPropagation(); // لمنع فتح النافذة المنبثقة عند الضغط على المشاركة
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `تفقد هذا المنتج من ESN Center: ${product.name}`,
        url: window.location.href, // رابط الموقع
      }).catch(console.error);
    } else {
      // بديل للمتصفحات التي لا تدعم المشاركة المباشرة
      alert(`تم نسخ رابط المنتج: ${product.name}`);
    }
  };

  return (
    <section className="products-section" id="products">
      <div className="products-header">
        <h2 className="section-title">أحدث <span className="highlight">الأنظمة</span></h2>
        <p className="section-subtitle">تشكيلة مختارة من أفضل العلامات التجارية العالمية لضمان أمنك</p>
      </div>

      <div className="store-layout">
        <aside className="glass-sidebar">
          {/* ... أكواد القائمة الجانبية (الفلاتر) بقيت كما هي ... */}
          <div className="filter-group">
            <h4 className="filter-title">نوع النظام</h4>
            <CustomDropdown options={categoryOptions} value={activeCategory} onChange={setActiveCategory} />
          </div>

          <div className="filter-group">
            <h4 className="filter-title">العلامة التجارية</h4>
            <CustomDropdown options={brandOptions} value={activeBrand} onChange={setActiveBrand} />
          </div>

          <div className="filter-group">
            <h4 className="filter-title">السعر: أقصى حد ${maxPrice}</h4>
            <div className="slider-wrapper">
              <input type="range" min="10" max="300" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="glass-slider" />
              <div className="price-labels">
                <span>$10</span>
                <span>$300</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <SpotlightCard key={product.id} className="glass-card" spotlightColor="rgba(255, 255, 255, 0.15)">
                <div className="card-image-wrapper" onClick={() => openModal(product)}>
                  <div className="brand-badge">{product.brand}</div>
                  
                  {/* --- أزرار الإجراءات السريعة (المفضلة والمشاركة) --- */}
                  <div className="quick-actions">
                    <button className="icon-btn" onClick={(e) => toggleFavorite(e, product.id)} title="إضافة للمفضلة">
                      <svg 
                        width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        /* تغيير اللون إذا كان المنتج في المفضلة */
                        fill={favorites.includes(product.id) ? "#FFF" : "none"} 
                        stroke={favorites.includes(product.id) ? "#FFF" : "currentColor"}
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                    <button className="icon-btn" onClick={(e) => handleShare(e, product)} title="مشاركة">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                      </svg>
                    </button>
                  </div>

                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="card-content">
                  <h3 className="product-name" onClick={() => openModal(product)}>{product.name}</h3>
                  <div className="product-price">${product.price}</div>
                  <p className="product-desc">{product.description.substring(0, 50)}...</p>
                  <div className="card-actions">
                    <button className="btn-glass-cart" onClick={() => openModal(product)}>
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              </SpotlightCard>
            ))
          ) : (
            <div className="no-products-msg">لا توجد منتجات مطابقة للبحث.</div>
          )}
        </div>
      </div>

      {/* النافذة المنبثقة تبقى كما هي ... */}
      {/* --- النافذة المنبثقة --- */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="glass-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            
            <div className="modal-details">
              <span className="brand-badge modal-badge">{selectedProduct.brand}</span>
              <h3 className="modal-title">{selectedProduct.name}</h3>
              <div className="modal-price">${selectedProduct.price}</div>
              <p className="modal-description">{selectedProduct.description}</p>
              
              {/* حاوية الأزرار الجديدة: السلة + المفضلة + المشاركة */}
              <div className="modal-action-group">
                <button 
                  className={`btn-primary modal-buy-btn ${addedToCartId === selectedProduct.id ? 'success-state' : ''}`}
                  onClick={() => handleAddToCart(selectedProduct)}
                >
                  {addedToCartId === selectedProduct.id ? '✔ تمت الإضافة للسلة' : 'أضف إلى السلة'}
                </button>
                
                <button className="icon-btn modal-icon-btn" onClick={(e) => toggleFavorite(e, selectedProduct.id)} title="إضافة للمفضلة">
                  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill={favorites.includes(selectedProduct.id) ? "#FFF" : "none"} stroke={favorites.includes(selectedProduct.id) ? "#FFF" : "currentColor"}>
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                
                <button className="icon-btn modal-icon-btn" onClick={(e) => handleShare(e, selectedProduct)} title="مشاركة">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;