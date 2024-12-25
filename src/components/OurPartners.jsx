import { Link } from "react-router-dom";
import partner_0 from "../../src/assets/partners/partners_0.jpeg";
import partner_1 from "../../src/assets/partners/partners_1.png";
import partner_2 from "../../src/assets/partners/partners_2.jpeg";
import partner_3 from "../../src/assets/partners/partners_3.jpeg";
import partner_4 from "../../src/assets/partners/partners_4.jpg";
import partner_5 from "../../src/assets/partners/partners_5.jpeg";
import partner_6 from "../../src/assets/partners/partners_6.jpeg";
import partner_7 from "../../src/assets/partners/partners_7.jpeg";
import { RiExternalLinkLine } from "react-icons/ri";

const OurPartners = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-1">Our Partners</h2>
      <p className="text-base text-gray-500">Working with those companies driving the future of query & recommendation operations</p>
      <div className="border border-teal-600 mt-3"></div>
      <div className="mt-8 flex flex-wrap justify-center gap-10 lg:w-10/12 mx-auto">
        
        {/* partner-1 */}
        <div className="border p-2 rounded-sm hover:scale-110 hover:duration-300">
          <img src={partner_0} className="rounded-md" alt="" />
          <Link className="text-lg font-medium text-gray-500 flex items-center gap-2" onClick={()=> window.open("https://www.programming-hero.com/", "_blank")}>Programming Hero <RiExternalLinkLine size={22} /></Link>
        </div>

        {/* partner-2 */}
        <div className="border p-2 rounded-sm hover:scale-110 hover:duration-300">
          <img src={partner_1} className="rounded-md" alt="" />
          <Link className="text-lg font-medium text-gray-500 flex items-center gap-2" onClick={()=> window.open("https://brandviserpro.com/", "_blank")}>Brandviser <RiExternalLinkLine size={22} /></Link>
        </div>

        {/* partner-3 */}
        <div className="border p-2 rounded-sm hover:scale-110 hover:duration-300">
          <img src={partner_2} className="rounded-md" alt="" />
          <Link className="text-lg font-medium text-gray-500 flex items-center gap-2" onClick={()=> window.open("https://www.imbdagency.com/", "_blank")}>IMBD Agency Ltd. <RiExternalLinkLine size={22} /></Link>
        </div>

        {/* partner-4 */}
        <div className="border p-2 rounded-sm hover:scale-110 hover:duration-300">
          <img src={partner_3} className="rounded-md" alt="" />
          <Link className="text-lg font-medium text-gray-500 flex items-center gap-2" onClick={()=> window.open("https://hypedhaka.com/", "_blank")}>HYPE Dhaka <RiExternalLinkLine size={22} /></Link>
        </div>

        {/* partner-5 */}
        <div className="border p-2 rounded-sm hover:scale-110 hover:duration-300">
          <img src={partner_4} className="rounded-md" alt="" />
          <Link className="text-lg font-medium text-gray-500 flex items-center gap-2" onClick={()=> window.open("https://www.bizcope.com/", "_blank")}>Bizcope <RiExternalLinkLine size={22} /></Link>
        </div>

        {/* partner-6 */}
        <div className="border p-2 rounded-sm hover:scale-110 hover:duration-300">
          <img src={partner_5} className="rounded-md" alt="" />
          <Link className="text-lg font-medium text-gray-500 flex items-center gap-2" onClick={()=> window.open("https://www.datazoinfotech.com.bd/", "_blank")}>Datazo Info Tech <RiExternalLinkLine size={22} /></Link>
        </div>

        {/* partner-7 */}
        <div className="border p-2 rounded-sm hover:scale-110 hover:duration-300">
          <img src={partner_6} className="rounded-md" alt="" />
          <Link className="text-lg font-medium text-gray-500 flex items-center gap-2" onClick={()=> window.open("https://bjitgroup.com/", "_blank")}>BJIT Group <RiExternalLinkLine size={22} /></Link>
        </div>

        {/* partner-8 */}
        <div className="border p-2 rounded-sm hover:scale-110 hover:duration-300">
          <img src={partner_7} className="rounded-md" alt="" />
          <Link className="text-lg font-medium text-gray-500 flex items-center gap-2" onClick={()=> window.open("https://microdeft.com/", "_blank")}>Microdeft <RiExternalLinkLine size={22} /></Link>
        </div>

      </div>
    </div>
  );
};

export default OurPartners;