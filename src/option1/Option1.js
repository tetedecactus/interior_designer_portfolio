import './option1.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'
import Page5 from './Page5'

function Option1() {
    return (
      <div className="option1" id="/about">
        <div className="container">
          <div className="box1 snap-center min-w-full flex flex-col items-center justify-center">
            <div className="content-wrapper page-1 " id="page1">
                <Page1 />
            </div>
          </div>
          <div className="box2 snap-center min-w-full flex flex-col items-center justify-center">
            <div className="content-wrapper page-2" id="page2">
              <Page2 />
            </div>
          </div>
          <div className="box3 snap-center min-w-full flex flex-col items-center justify-center">
            <div className="content-wrapper page-3" id="page3">
              <Page3 />
            </div>
          </div>
          <div className="box4 snap-center min-w-full">
            <div className="content-wrapper page-4" id="page4">
              <Page4 />
            </div>
          </div>
          <div className="box5 snap-center min-w-full">
            <div className="content-wrapper page-4" id="page4">
              <Page5 />
            </div>
          </div>
        </div>
      </div>
    ); 
}

export default Option1;