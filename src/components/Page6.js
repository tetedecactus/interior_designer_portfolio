import plan_garneau from '../asset/img/plan_garneau.png';

function Page6() {
  return (
    <div className="page6-box overflow-hidden h-screen flex justify-center items-center">
      <div className="img w-1/2">
        <img
          className="cuisine-img w-full"
          src={plan_garneau}
          alt="Plan de la cuisine Garneau"
        />
      </div>
      <div className="cuisine-thibodeau w-1/2 flex flex-col justify-center items-center">
        <p className="text-left text-4xl tracking-widest mb-16">
          02{' '}
          <span className="text-2xl uppercase font-thin border-b border-dashed border-black">
            LA Résidence <span className="font-bold">garneau</span>
          </span>
        </p>
        <p className="text-justify text-xl w-9/12">
          {' '}
          Le projet de la Résidence Garneau consistait à convertir le pavillon
          Jacques-Marquette du Cégep Garneau dans le but d’aménager une
          résidence pour personnes retraitées autonomes et semi-automnes. La
          planification du 2e étage de cet immeuble a été séparée en six espaces
          distincts : une entrée, une aire d’accueil et administrative, une zone
          médicale, un centre de soins et d’entraînement, une zone de détente et
          de loisirs ainsi qu’un espace consacré à l’alimentation. L’aménagement
          proposé devait s’assurer de répondre à la contrainte d’accessibilité
          universelle ainsi que porter une attention particulière à la sécurité
          des usagers. Ma contribution à ce projet collaboratif fut
          l’aménagement du centre de soins et d’entraînement.
        </p>
      </div>
    </div>
  );
}

export default Page6;
