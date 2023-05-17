import stand_1 from '../asset/img/stand_1.png';
import stand_2 from '../asset/img/stand_2.png';
import stand_3 from '../asset/img/stand_3.png';

function Page11() {
  return (
    <div className="page11-box overflow-hidden h-screen flex flex-col justify-center items-center">
      <div className="white-space w-1/4"></div>
      <div className="flex flex-row h-1/2 w-3/4">
        <img src={stand_1} alt="" className="w-1/2" />
        <img src={stand_2} alt="" className="w-1/2" />
      </div>
      <img src={stand_3} alt="" className="h-1/2  w-3/4" />
    </div>
  );
}

export default Page11;
