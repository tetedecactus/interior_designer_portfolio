import section_plan from '../asset/img/section_garneau.png';
import liste_mobilier from '../asset/img/mobilier_garneau.png';
import plancher from '../asset/img/plancher_garneau.png';
import tapis from '../asset/img/tapis_garneau.png';
import hall from '../asset/img/hall_garneau.png';
import salon from '../asset/img/salon_garneau.png';
import bureau from '../asset/img/bureau_garneau.png';

function Page7() {
  return (
    <div className="page7-box h-screen">
      <div className="plan-cuisine flex flex-row">
        <div className="flex  flex-col w-2/3 items-center mt-20">
          <div className="mb-14">
            <div className="flex flex-row">
              <img
                className="w-2/3"
                src={section_plan}
                alt="Plan Residence Garneau"
              />
              <div className="w-1/3">
                <img src={liste_mobilier} alt="Liste Mobilier Garneau" width="100" height="400" />
              </div>
            </div>
            <h4 className="text-xl pt-6 uppercase font-thin">
              Plan d'aménagement
            </h4>
            <p>CENTRE DE SOINS ET D’ENTRAÎNEMENT</p>
          </div>
          <div className="ciramique justify-center items-center w-1/3 flex flex-row">
            <img
              className="w-1/2 mr-2"
              src={plancher}
              alt="Plancher De Bois residence garneau"
            />
            <div className="justify-center items-center w-1/2 flex flex-col">
              <img
                className="ciramique-mur mb-2"
                src={tapis}
                alt="Tapis residence garneau"
              />
            </div>
          </div>
        </div>
        <div className="img-cuisine w-1/3 flex flex-col items-center ">
          <div>
            <img
              className="w-auto mb-2"
              src={hall}
              alt="Hall Residence Garneau"
            />
          </div>
          <div className="flex flex-row">
            <img
              className="w-1/2 mr-2"
              src={salon}
              alt="Salon Residence Garneau"
            />
            <img
              className="w-1/2"
              src={bureau}
              alt="Bureau residence Garneau"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7;
