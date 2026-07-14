import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [currentPercent, setCurrentPercent] = useState(0);
  const [currentText, setCurrentText] = useState("Loading");
  const [isFadeOut, setIsFadeOut] = useState(false);

  const steps = [
    { percentage: 15, text: "Global Reach" },
    { percentage: 55, text: "Sustainable Solutions" },
    { percentage: 95, text: "Ready to Explore" }
  ];

  useEffect(() => {
    let currentStepIdx = 0;
    const totalDuration = 4500; 
    const intervalTime = 30; 
    const stepIncrement = (100 / (totalDuration / intervalTime));

    // লোগো অ্যানিমেশন শেষ হওয়ার পর (২.৪ সেকেন্ড) প্রগ্রেস শুরু হবে
    const startTimeout = setTimeout(() => {
      const timer = setInterval(() => {
        setCurrentPercent((prev) => {
          const nextPercent = prev + stepIncrement;
          
          if (nextPercent >= 100) {
            clearInterval(timer);
            return 100;
          }

          // টেক্সট পরিবর্তনের লজিক ও ফেড অ্যানিমেটিং
          if (currentStepIdx < steps.length && nextPercent >= steps[currentStepIdx].percentage) {
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
    <>
      <style>{`
        .loader-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #e8edf9;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          padding: 1rem;
          z-index: 9999;
        }

        .loader-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 720px;
          padding: 3.2rem 2.8rem 2.8rem;
          transition: all 0.2s;
        }

        .brand-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          width: 100%;
          margin-bottom: 2.8rem;
          flex-wrap: nowrap;
        }

        .logo-box {
          width: 130px;
          height: 130px;
          min-width: 130px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #ffffff, #f0f4fe);
          border-radius: 32px;
          box-shadow: 0 10px 32px rgba(0, 180, 216, 0.12), 0 0 0 1px rgba(0, 180, 216, 0.04);
          padding: 20px;
          animation: zoomIn 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     shiftLeft 0.9s cubic-bezier(0.76, 0, 0.24, 1) 1.4s forwards;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .logo-box:hover {
          transform: scale(1.02) translateX(-6px);
          box-shadow: 0 14px 44px rgba(0, 180, 216, 0.18);
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.02));
        }

        .text-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          max-width: 0;
          opacity: 0;
          white-space: nowrap;
          animation: revealText 0.9s cubic-bezier(0.76, 0, 0.24, 1) 1.4s forwards;
        }

        .brand-name {
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: 5px;
          margin: 0 0 4px 0;
          text-transform: uppercase;
          line-height: 1.1;
          background: linear-gradient(135deg, #0b1a33, #1a3a5c);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .brand-tag {
          font-size: 0.7rem;
          font-weight: 500;
          color: #64748b;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          opacity: 0.7;
          margin-top: 2px;
          align-self: center; /* আপনার আপডেটেড স্টাইল */
        }

        .loading-system {
          width: 100%;
          max-width: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          animation: fadeDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) 2.4s forwards;
        }

        .progress-track {
          width: 100%;
          height: 4px;
          background: rgba(0, 180, 216, 0.10);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.02);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #00b4d8, #0077b6);
          border-radius: 20px;
          box-shadow: 0 0 12px rgba(0, 180, 216, 0.2);
          transition: width 0.1s linear;
        }

        .loading-label {
          margin-top: 14px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2.5px;
          color: #00b4d8;
          text-transform: uppercase;
          min-height: 18px;
          transition: opacity 0.25s ease, transform 0.25s ease;
          opacity: 1;
          transform: translateY(0);
        }

        .loading-label.fade-out {
          opacity: 0;
          transform: translateY(6px);
        }

        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.3) rotate(-4deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes shiftLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-8px); }
        }

        @keyframes revealText {
          0% { opacity: 0; max-width: 0; transform: translateX(-16px); }
          100% { opacity: 1; max-width: 450px; transform: translateX(0); }
        }

        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-12px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .loader-container { padding: 2.5rem 2rem; }
          .logo-box { width: 115px; height: 115px; min-width: 115px; border-radius: 28px; }
          .brand-name { font-size: 1.9rem; letter-spacing: 4px; }
          .brand-tag { font-size: 0.65rem; letter-spacing: 3px; }
        }

        @media (max-width: 600px) {
          .loader-container { padding: 2rem 1rem; }
          .brand-wrapper { gap: 16px; margin-bottom: 2.2rem; }
          .logo-box { width: 95px; height: 95px; min-width: 95px; padding: 16px; border-radius: 24px; }
          .brand-name { font-size: 1.5rem; letter-spacing: 3px; }
          .brand-tag { font-size: 0.6rem; letter-spacing: 2px; }
          .loading-system { max-width: 290px; }
          .loading-label { font-size: 0.7rem; letter-spacing: 2px; }
        }

        @media (max-width: 375px) {
          .brand-wrapper { gap: 10px; margin-bottom: 1.8rem; }
          .logo-box { width: 75px; height: 75px; min-width: 75px; padding: 12px; border-radius: 18px; }
          .brand-name { font-size: 1.25rem; letter-spacing: 2px; }
          .brand-tag { font-size: 0.5rem; letter-spacing: 1.5px; }
          .loading-system { max-width: 240px; }
          .loading-label { font-size: 0.65rem; letter-spacing: 1.5px; }
        }
      `}</style>

      <div className="loader-screen">
        <div className="loader-container">
          <div className="brand-wrapper">
            <div className="logo-box">
              <img src="https://www.tasarabd.com/android-chrome-512x512.png" alt="Tasara Limited" className="logo-img" />
            </div>
            <div className="text-box">
              <h1 className="brand-name">TASARA LIMITED</h1>
              <div className="brand-tag">Global Plastic Materials Supply</div>
            </div>
          </div>

          <div className="loading-system">
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${currentPercent}%` }}></div>
            </div>
            <div className={`loading-label ${isFadeOut ? 'fade-out' : ''}`}>
              {currentText}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;