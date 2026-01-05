import Education from "../components/Education";
import Money from "../components/Money";
import VisitPlaces from "../components/VisitPlaces";
import AllSectors from "./goverment/AllSectors";

const Planet = () => {
  return (
    <>
      
      <div className="text-center bg-gradient from-emerald-400 via-emerald-500 to-emerald-600 py-12 shadow-lg rounded-b-3xl">
        
        <h1 className="text-8xl font-extrabold tracking-wide text-white drop-shadow-xl">
          IONICA
        </h1>
        <p className="text-2xl mt-3 text-white/90 font-light italic">
          “A new planet. A new vibe.”
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 space-y-14">
        <Education />
        <Money />
        <VisitPlaces />
        <AllSectors />
      </div>
    </>
  );
};

export default Planet;
