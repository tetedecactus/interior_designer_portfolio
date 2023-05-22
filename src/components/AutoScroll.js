import React, { useEffect, useRef } from 'react';

const AutoScroll = ({ isPlaying }) => {
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    let interval;

    const scrollDiv = () => {
      if (scrollableDivRef.current) {
        scrollableDivRef.current.scrollLeft += 10; // Faites défiler de 10 pixels vers la droite (ajustez selon vos besoins)
      }
    };

    if (isPlaying) {
      interval = setInterval(scrollDiv, 10000); // Défilement automatique toutes les 10 secondes (ajustez selon vos besoins)
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <div ref={scrollableDivRef} className="scrollable-div">
      
    </div>
  );
};

export default AutoScroll;
