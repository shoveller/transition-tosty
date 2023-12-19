import { useEffect, useRef, useState } from 'react';

import styles from './Toasty.module.css';

function Toasty() {
  const [isShown, setIsShown] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsShown(entry.isIntersecting);
    });

    if (wrapperRef.current) {
        observer.observe(wrapperRef.current);
    }
  }, []);

  const translateX = isShown ? '0%' : '100%';

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div
        className={styles.character}
        style={{
          transition: 'transform 200ms',
          transform: `translateX(${translateX})`,
        }}
      >
        👻
      </div>
    </div>
  );
}

export default Toasty;