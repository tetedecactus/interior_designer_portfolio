import plan_lavabo from '../asset/img/plan_meuble_lavabo.png';

function Page8() {
  return (
    <div className="page8-box overflow-hidden h-screen flex justify-center items-center">
      <div className="img w-1/2">
        <img
          className="cuisine-img w-full"
          src={plan_lavabo}
          alt="Plan du Meuble Lavabo"
        />
      </div>
      <div className="cuisine-thibodeau w-1/2 flex flex-col justify-center items-center">
        <p className="text-left text-4xl tracking-widest mb-16">
          03{' '}
          <span className="text-2xl uppercase font-thin border-b border-dashed border-black">
            le meuble <span className="font-bold">lavabo</span>
          </span>
        </p>
        <p className="text-justify text-xl w-9/12">
          {' '}
          Le projet du meuble lavabo consistait à concevoir un mobilier sur
          mesure, accompagné des dessins d’exécution, qui allie la
          fonctionnalité, l’esthétisme et l’originalité. La conception fut
          réfléchie afin d’offrir aux clients un espace où l’ensemble de la
          famille peut cohabiter dans l’harmonie. Le rangement abondant a été
          exploité pour ce projet dans l’objectif de permettre aux usagers un
          visuel ordonné de la salle de bain, considérant le grand nombre
          d’usagers.
        </p>
      </div>
    </div>
  );
}

export default Page8;
