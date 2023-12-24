import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "./Toasty.module.css";

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

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <motion.div
        className={styles.character}
        initial={false}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        animate={{ x: isShown ? "0%" : "100%" }}
      >
        👻
      </motion.div>
    </div>
  );
}

export default Toasty;
