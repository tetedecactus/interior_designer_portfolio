import stand_plan from '../asset/img/plan_stand.png';

function Page10() {
  return (
    <div className="page10-box overflow-hidden h-screen flex justify-center items-center">
      <div className="cuisine-thibodeau w-2/3 flex flex-col justify-center items-center">
        <p className="text-left text-4xl tracking-widest mb-16">
          04{' '}
          <span className="text-2xl uppercase font-thin border-b border-dashed border-black">
          Le stand <span className="font-bold">d’exposition</span>
          </span>
        </p>
        <p className="text-justify text-xl w-7/12">
          {' '}
          En collaboration avec Rosy Filion Tardif Le projet du stand
          d’exposition consistait à conceptualiser une espace aux dimensions
          précises et aux paramètres rigides intégrer au parcours de l’événement
          Expo Habitat dans la région de Québec. L’entreprise-école Garneau
          Travail souhaitait que le stand offre une réception, un espace prévu
          pour l’attente, ainsi que trois salles de consultations. L’espace a
          été réfléchi selon le principe du contraste afin d’offrir un espace et
          une ambiance distincts de son environnement. Les cloisons de cordages
          permettent une discrétion aux usagers, tout en mettant de l’avant les
          services offerts par l’entreprise de manière légère et réfléchie.
        </p>
      </div>
      <div className="img w-1/3">
        <img
          className="cuisine-img w-full"
          src={stand_plan}
          alt="Plan du Stand d'Exposition"
        />
      </div>
    </div>
  );
}

export default Page10;
