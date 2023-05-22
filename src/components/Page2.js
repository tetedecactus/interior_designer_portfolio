import jutine from '../asset/img/page2_img.png';

function Page2() {
  return (
    <div className="page2-box flex flex-col items-center mt-20 overflow-auto">
      <h3 className="text-3xl font-thin">JUSTINE PARDIAC</h3>
      <div className="relative">
        <div className="absolute h-64 inset-y-0 left-1/2 border-l border-dashed border-gray-400"></div>
      </div>
      <img src={jutine} alt="Bio de Justine Pardiac" />
    </div>
  );
}

export default Page2;
