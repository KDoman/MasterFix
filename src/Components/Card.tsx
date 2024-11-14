interface Card {
  name: string;
  img: string;
  index: number;
  reviews: number;
}

export const Card = ({ name, img, index, reviews }: Card) => {
  return (
    <div className="border-2 rounded-xl my-10 p-2 flex">
      <div className="max-w-32 max-h-32 rounded-full overflow-hidden">
        <img
          src={img}
          alt={`zdjęcie fachowca nr ${index}`}
          className="w-full"
        />
      </div>
      <div className="ml-4 text-xs flex justify-between flex-col">
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <p>Oceny: {reviews}</p>
        </div>
        <p className="">test</p>
      </div>
    </div>
  );
};
