import Education from "../../components/Education";

const EducationSec = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          Government Education Sector of Your Planet
        </h1>

        <div className="space-y-10">

          <div>
            <h2 className="text-2xl font-bold text-red-700">Official System Name</h2>
            <p className="text-gray-700">
              The government of your planet follows the education model called:
              <span className="font-semibold">“Neo Learn Grid (NLG)”</span>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-purple-700">Purpose of the Education Sector</h2>
            <p className="text-gray-700">
              The government aims to build a balanced society through technology, creativity,
              moral values, and real-world skill training.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-700">Government Responsibilities</h2>
            <p className="text-gray-700">The education department handles:</p>
            <ul className=" pl-6 text-gray-700">
              <li>Creating universal learning standards</li>
              <li>Training teachers across all regions</li>
              <li>Building NLG learning centers statewide</li>
              <li>Providing free study tools and digital kits</li>
              <li>Conducting yearly skill evaluations</li>
              <li>Maintaining emotional, creative, and tech balance</li>
            </ul>
          </div>

        </div>
         
     <Education/>
      </div>
      
    </>
  );
};

export default EducationSec;
