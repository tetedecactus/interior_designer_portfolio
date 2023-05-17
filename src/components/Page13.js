import plan_hotel from '../asset/img/plan_hotel.png';
import mur_hotel from '../asset/img/mur_hotel.png';
import marbre from '../asset/img/marmbre_hotel.png';
import ciramique_hotel from '../asset/img/ciramique_hotel.png';
import hall_h from '../asset/img/hall_hotel.png';
import wc from '../asset/img/sal_de_bain_hotel.png';

function Page13() {
  return (
    <div className="page13-box justify-center overflow-hidden flex flex-row h-screen">
      <div className="plan-hotel flex flex-col w-2/3">
        <div className="h-1/2">
          <img src={plan_hotel} alt="Plan de l'hotel" />
          <p className="uppercase">PLAN D’AMÉNAGEMENT</p>
        </div>
        <div className="flex flex-row">
          <img
            src={mur_hotel}
            alt="Ciramique de mur de l'hotel, style brique"
          />
          <div className="flex flex-col">
            <img src={marbre} alt="Marbre comoptoir de l'Hotel" />
            <img src={ciramique_hotel} alt="Ciramique plancher de l'Hotel" />
          </div>
        </div>
      </div>
      <div className="photo-hotel flex flex-col w-1/3">
        <img src={hall_h} alt="hall de l'hotel" />
        <img src={wc} alt="Toilette de l'hotel" />
      </div>
    </div>
  );
}

export default Page13;
