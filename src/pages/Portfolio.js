import React, { useEffect, useRef, useState } from 'react';
import '../style/Portfolio.css';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
import Page6 from '../components/Page6';
import Page7 from '../components/Page7';
import Page8 from '../components/Page8';
import Page10 from '../components/Page10';
import Page11 from '../components/Page11';
import Page12 from '../components/Page12';
import Page13 from '../components/Page13';
import Page14 from '../components/Page14';

function Portfolio() {
  const [currentDivision, setCurrentDivision] = useState(1);
  const divisionsContainerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDivision(prevDivision => changeDivision(prevDivision));
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function scrollRight() {
    if (divisionsContainerRef.current) {
      divisionsContainerRef.current.scrollLeft += divisionsContainerRef.current.offsetWidth;
    }
  }

  function changeDivision(currentDivision) {
    if (currentDivision < 14) {
      scrollRight();
      return currentDivision + 1;
    } else {
      if (divisionsContainerRef.current) {
        divisionsContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
      return 1;
    }
  }
  return (
    <div className="option1" id="/about">
      <div ref={divisionsContainerRef} className="container">
        <div className="box1 scrollable-div snap-center min-w-full flex flex-col items-center justify-center">
          <div className="content-wrapper page-1 " id="page1">
            <Page1 />
          </div>
        </div>
        <div className="box2 scrollable-div snap-center min-w-full flex flex-col items-center justify-center">
          <div className="content-wrapper page-2" id="page2">
            <Page2 />
          </div>
        </div>
        <div className="box3 scrollable-div snap-center min-w-full flex flex-col items-center justify-center">
          <div className="content-wrapper page-3" id="page3">
            <Page3 />
          </div>
        </div>
        <div className="box4 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-4" id="page4">
            <Page4 />
          </div>
        </div>
        <div className="box5 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-5" id="page5">
            <Page5 />
          </div>
        </div>
        <div className="box6 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-6" id="page6">
            <Page6 />
          </div>
        </div>
        <div className="box7 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-7" id="page7">
            <Page7 />
          </div>
        </div>
        <div className="box8 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-8" id="page8">
            <Page8 />
          </div>
        </div>
        <div className="box10 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-10" id="page10">
            <Page10 />
          </div>
        </div>
        <div className="box11 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-11" id="page11">
            <Page11 />
          </div>
        </div>
        <div className="box12 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-12" id="page12">
            <Page12 />
          </div>
        </div>
        <div className="box13 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-13" id="page13">
            <Page13 />
          </div>
        </div>
        <div className="box14 scrollable-div snap-center min-w-full">
          <div className="content-wrapper page-14" id="page14">
            <Page14 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
