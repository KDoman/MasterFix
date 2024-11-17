import { Label } from "./Label";
import { Button } from "./shared components/Button";
import { Star } from "./shared components/Star";

interface Card {
  name: string;
  img: string;
  index: number;
  reviews: number[];
  speciality: string[];
}

export const Card = ({ name, img, index, reviews, speciality }: Card) => {
  return (
    <div className="border-2 rounded-xl my-4 p-2 max-w-80 mx-auto">
      <img
        src={img}
        alt={`zdjęcie fachowca nr ${index}`}
        className="rounded-lg"
      />
      <div className="flex justify-between mt-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <div id="stars" className="flex font-bold items-center">
          <Star />
          <span>
            {(reviews.reduce((acc, val) => acc + val) / reviews.length).toFixed(
              1
            )}
          </span>
        </div>
      </div>
      <div className="min-w-full flex flex-wrap mt-2">
        {speciality.map((spec) => (
          <Label>{spec}</Label>
        ))}
      </div>
      <Button additionalClass="min-w-full mt-10">Wezwij</Button>
    </div>
  );
};
