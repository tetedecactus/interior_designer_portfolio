import hotel from '../asset/img/hotel.png';

function Page12() {
  return (
    <div className="page12-box overflow-hidden h-screen flex justify-center items-center">
      <div className="img w-1/3">
        <img
          className="cuisine-img w-full"
          src={hotel}
          alt="Plan du Meuble Lavabo"
        />
      </div>
      <div className="cuisine-thibodeau w-2/3 flex flex-col justify-center items-center">
        <p className="text-left text-4xl tracking-widest mb-16">
          05{' '}
          <span className="text-2xl uppercase font-thin border-b border-dashed border-black">
            L’ <span className="font-bold">hôtel</span>
          </span>
        </p>
        <p className="text-justify text-xl w-6/12">
          {' '}
          Le projet consistait à l’aménagement et au design d’un rez-dechaussée
          d’hôtel au sein d’un bâtiment existant. Érigé sur la rue Maguire à
          Québec, l’hôtel Maguire se devait de refléter les caractéristiques du
          quartier environnant. La conception s’est donc articulée selon le
          principe du contraste notamment au niveau des styles et des textures.
          L’intégration d’éléments forts dans l’aménagement proposé, tel que la
          voûte notamment, permet au concept de l’hôtel de faire un subtil
          rappel à l’historique de l’artère où l’hôtel est implanté et au curé
          en l’honneur duquel celle-ci a été nommée.
        </p>
      </div>
    </div>
  );
}

export default Page12;
