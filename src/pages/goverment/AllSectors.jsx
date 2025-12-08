import Defence from "./Defence"
import EducationSec from "./EducationSec"
import LandSector from "./LandSector"
import Medical from "./Medical"
import Transport from "./Transport"


const AllSectors = () => {
  return (<>
  
  <div>
<h1 className="text-center text-5xl p-3 m-3">GOVERNMENT SECTORS AND GOVERNMENT RULES</h1>

<EducationSec/>
<Transport/>
<Medical/>
<Defence/>
<LandSector/>
  </div>
  
  </>
    
  )
}

export default AllSectors