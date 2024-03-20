import React, { useEffect, useRef, useState } from 'react';
import styles from "./page-footer.module.css";

export function PageFooter() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries && entries[0]) {
        setVisible(entries[0].isIntersecting);
      }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return(
    <>
      {/* to reveal the footer below */}
      <div ref={footerRef} style={{height: '200px', pointerEvents: 'none'}}></div>
      <div className={styles.footerFix} style={{opacity: visible ? '1' : '0'}}>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-5 h-full
         divide-y-2 divide-slate-500 lg:divide-x-2 lg:divide-y-0'>
          <div className='p-6'>
            <div className='text-center text-white text-l'>I hope you find somethings interesting here </div>
          </div>
          <div className='p-6'>
              <div className='text-center text-white text-3xl'>Thank You for visiting</div>
          </div>
        </div>
      </div>
    </>
  );
}