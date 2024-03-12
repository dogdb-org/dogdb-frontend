import BreedCard from "../BreedCard";

const data = Array.from({ length: 20 }, (_, index) => <BreedCard key={index} />);

function BreedGrid() {
    return (
    <div className="max-w-2xl flex flex-wrap justify-center">
      {data.map((item, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
         {item}
        </div>
      ))}
    </div>
  );}

export default BreedGrid


