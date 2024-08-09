import Hero from "../components/Hero";
import { Gallery, Model, Services } from "../pages";

import HowItWorks from "./HowItWorks";

const Widget = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <Model />
      <Services />
      <Gallery />
    </div>
  );
};

export default Widget;
