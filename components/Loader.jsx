'use client';

import React, { useState, useEffect } from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [currentText, setCurrentText] = useState('Loading');
  const [isFadeOut, setIsFadeOut] = useState(false);

  const steps = [
    { percentage: 15, text: 'Global Reach' },
    { percentage: 55, text: 'Sustainable Solutions' },
    { percentage: 95, text: 'Ready to Explore' },
  ];

  useEffect(() => {
    let currentStepIdx = 0;
    const totalDuration = 4500;
    const intervalTime = 30;
    const stepIncrement = 100 / (totalDuration / intervalTime);

    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentPercent((prev) => {
          const nextPercent = prev + stepIncrement;

          if (nextPercent >= 100) {
            clearInterval(timer);
            return 100;
          }

          if (
            currentStepIdx < steps.length &&
            nextPercent >= steps[currentStepIdx].percentage
          ) {
            const nextText = steps[currentStepIdx].text;
            setIsFadeOut(true);
            setTimeout(() => {
              setCurrentText(nextText);
              setIsFadeOut(false);
            }, 290);
            currentStepIdx++;
          }

          return nextPercent;
        });
      }, intervalTime);
    }, 2400);

    return () => clearTimeout(startTimeout);
  }, []);

  return (
    <div className={styles.loaderScreen}>
      <div className={styles.loaderContainer}>
        <div className={styles.brandWrapper}>
          <div className={styles.logoBox}>
            <img
              src="https://www.tasarabd.com/android-chrome-512x512.png"
              alt="Tasara Limited"
              className={styles.logoImg}
            />
          </div>
          <div className={styles.textBox}>
            <h1 className={styles.brandName}>TASARA LIMITED</h1>
            <div className={styles.brandTag}>
              Global Plastic Materials Supply
            </div>
          </div>
        </div>

        <div className={styles.loadingSystem}>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{ width: `${currentPercent}%` }}
            ></div>
          </div>
          <div
            className={`${styles.loadingLabel} ${
              isFadeOut ? styles.loadingLabelFadeOut : ''
            }`}
          >
            {currentText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;