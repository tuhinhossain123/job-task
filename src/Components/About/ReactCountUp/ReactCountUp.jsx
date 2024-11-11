import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

const ReactCountUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div
      ref={counterRef}
      className="flex items-center justify-center h-24 lg:h-32 w-48 lg:w-56 bg-white rounded-[20px] drop-shadow-lg p-5"
    >
      <div className="flex  items-center gap-3">
        <div className="relative">
          <svg width="70" height="70" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#F0F0F0"
              strokeWidth="5"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#FFB703"
              strokeWidth="5"
              fill="none"
              strokeDasharray="250"
              strokeDashoffset={isVisible ? "0" : "250"}
              style={{
                transition: "stroke-dashoffset 1.5s ease",
                transformOrigin: "center",
                transform: "rotate(-90deg)",
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold p-6">
            {isVisible ? <CountUp end={50} duration={1.5} suffix="+" /> : "0+"}
          </div>
        </div>
        <p className="text-base font-semibold text-left">Market Experiences</p>
      </div>
    </div>
  );
};

export default ReactCountUp;