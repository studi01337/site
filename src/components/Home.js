import Isotope from "isotope-layout";
import { useContext, useEffect, useRef } from "react";
import { CavaniContext } from "../Context";
import SectionContainer from "../layout/SectionContainer";
import TypingAnimation from "./AnimationText";

const Home = () => {
  const { navChange } = useContext(CavaniContext);
  const isotope = useRef();
  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    var imgLoad = imagesLoaded(".portfolio_list");
    imgLoad.on("done", function (instance) {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".item__",
        percentPosition: true,
        masonry: {
          columnWidth: ".item__",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    });
  });
  return (
    <SectionContainer navName="home">
      <div className="cavani_tm_home relative w-full h-full flex items-center">
        <div className="content pl-[100px] w-full text-center flex flex-col items-center">
          <div>
          <img
            src="assets/img/intro/profile.png"
            alt="image"
            width={180}
            className="rounded-full border-8 border-muted "
          />
          </div>

          <h3 className="mt-10 uppercase">
            Louis Grellet
          </h3>
          <span className="line inline-block w-[100px] h-[5px] bg-[#333] my-[30px]" />
          <TypingAnimation />
          <div className="cavani_tm_button transition_link mt-10">
            <a href="#contact" onClick={() => navChange("contact")}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Home;
