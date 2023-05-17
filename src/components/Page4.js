import cuisine from '../asset/img/cuisine_thibodeau.png';

function Page4() {
  return (
    <div className="page4-box overflow-hidden h-screen flex justify-center items-center">
      <div className="img w-1/2">
        <img
          className="cuisine-img w-full"
          src={cuisine}
          alt="Cuisine"
        />
      </div>
      <div className="cuisine-thibodeau w-1/2 flex flex-col justify-center items-center">
        <p className="text-left text-4xl tracking-widest mb-16">
          01{' '}
          <span className="text-2xl uppercase font-thin border-b border-dashed border-black">
            la cuisine <span className="font-bold">thibodeau</span>
          </span>
        </p>
        <p className="text-justify text-xl w-9/12">
          {' '}
          La cuisine de la propriété a été aménagée avec sensibilité, afin
          d’offrir aux clients une aire de vie qui favorise la rencontre et le
          partage. Cette grande pièce s’articule à l’entour d’un îlot au design
          minimal et fonctionnel. La palette de couleur neutre et douce s’agence
          aux pièces adjacentes, tout en optimisant la lumière naturelle;
          offrant à cet intérieur un air contemporain, élégant et intemporel.
        </p>
      </div>
    </div>
  );
}

export default Page4;
