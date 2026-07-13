import { useState, useEffect, useCallback } from 'react';
import './ClickSpark.css';

const ClickSpark = () => {
  const [sparks, setSparks] = useState([]);

  const handleClick = useCallback((e) => {
    // إنشاء كائن جديد لكل ضغطة مع الإحداثيات
    const newSpark = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };

    setSparks((prev) => [...prev, newSpark]);

    // مسح التأثير من الكود بعد انتهاء الحركة (0.5 ثانية) لعدم إثقال المتصفح
    setTimeout(() => {
      setSparks((prev) => prev.filter((spark) => spark.id !== newSpark.id));
    }, 500);
  }, []);

  useEffect(() => {
    // مراقبة الضغطات على مستوى الصفحة بالكامل
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [handleClick]);

  return (
    <>
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="spark-container"
          style={{ left: spark.x, top: spark.y }}
        >
          {/* توليد 8 خطوط شرر لكل ضغطة */}
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`spark-line line-${i}`} />
          ))}
        </div>
      ))}
    </>
  );
};

export default ClickSpark;