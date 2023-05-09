import './option1.css'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

function Option1() {
    return (
        <div className="option1" id="/about">
        <div className="container pb-11">
          <div className="box1 mx-11">
            <div className="content-wrapper page-1" id="page1">
              <Page1 />
            </div>
          </div>
          <div className="box2 mx-11">
            <div className="content-wrapper page-2" id="page2">
              <Page2 />
            </div>
          </div>
          <div className="box3 mx-11">
            <div className="content-wrapper page-3" id="page3">
              <Page3 />
            </div>
          </div>
        <div className="box4 mx-11">
          <div className="content-wrapper page-4" id="page4">
            <Page4 />
          </div>
        </div>
      </div>
        </div>
    ); 
}

export default Option1;