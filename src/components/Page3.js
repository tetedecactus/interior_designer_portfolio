function Page3() {
  return (
    <div className="page3-box flex w-screen">
      <div className="w-1/3"></div>
      <div className="w-2/3 flex flex-col justify-center items-center">
        <h4 className=" text-right mb-24 text-4xl uppercase tracking-wider font-thin">
          table des matières
        </h4>
        <div className=" flex flex-col  space-y-6">
          <p className="text-left text-4xl tracking-widest">
            01{' '}
            <span className="text-2xl pr-28 pb-1 uppercase font-thin border-b border-dashed border-black">
              la cuisine thibodeau
            </span>
          </p>
          <p className="text-left text-4xl tracking-widest">
            02{' '}
            <span className="text-2xl pr-28 pb-1 uppercase font-thin border-b border-dashed border-black">
              la résidence garneau
            </span>
          </p>
          <p className="text-left text-4xl tracking-widest">
            03{' '}
            <span className="text-2xl pr-28 pb-1 uppercase font-thin border-b border-dashed border-black">
              le meuble lavabo
            </span>
          </p>
          <p className="text-left text-4xl tracking-widest">
            04{' '}
            <span className="text-2xl pr-28 pb-1 uppercase font-thin border-b border-dashed border-black">
              le stand d'exposition
            </span>
          </p>
          <p className="text-left text-4xl tracking-widest">
            05{' '}
            <span className="text-2xl pr-28 pb-1 uppercase font-thin border-b border-dashed border-black">
              l'hotel
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page3;
