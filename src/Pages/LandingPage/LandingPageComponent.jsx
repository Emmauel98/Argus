import Herosection from "./Herosection";
import herosecbg from "../../assets/images/herosecbg.png";
import footerbg from "../../assets/images/footerbg.png";
import LatestSoftware from "./LatestSoftware";
import Leaf from "../../components/LandingPageComponents/Leaf";
import FeatureOfArgus from "./FeatureOfArgus";
import MitigateLoses from "./MitigateLoses";
import AiPoweredSoln from "./AiPoweredSoln";
import Testimony from "./Testimony";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Store from "../../components/LandingPageComponents/Store";
import Footer from "./Footer";


const LandingPageComponent = () => {
  return (
    <>
      <div className="px-[5vw]">
        <div
          className="lg:rounded-t-[6rem] rounded-t-[2rem]"
          style={{
            backgroundImage: `url(${herosecbg})`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          <Herosection />
        </div>
        <Leaf text={"Our Partners"} />
        <LatestSoftware />
        <Leaf text={"Features"} />
        <FeatureOfArgus />
        <Leaf text={"Lets Help"} />
        <MitigateLoses />
        <AiPoweredSoln />
        <Leaf text={"Testimmonials"} />
        <Testimony />
        <Leaf text={"Testimmonials"} />
      </div>
      <Pricing />
      <div className="px-[5vw]">
        <FAQ />
        <Store />
      </div>
      <div
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
      className=" py-[5rem]"
      >
        <Footer />
      </div>
    </>
  );
};

export default LandingPageComponent;
