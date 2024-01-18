import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
import { Detail, Soundcloud } from "./Popup";

const folio = [
  {
    name: "Allopneus",
    logo: "allopneus.png",
    role: "CTO",
    year: 2009,
    text: "I have built from scratch what is now the n°1 digital pure player in France.\n\nWith almost 8% global market share, Allopneus is top 5 biggest France ecommerce. 400M€ of revenue in 2016 & more than 200 employees. Michelin acquired 40% of the company for 60M€. Allopneus processes more than 80k orders/month with an average of 2M visitors/month.",
  },
  {
    name: "NoBlog",
    logo: "noblog.png",
    role: "Founder",
    year: 2024,
    text: "Elevate your blogging game\n\nStay ahead of the curve with our AI-powered blog platform. Embrace the future of content creation with the help of our intelligent algorithms and ChatGPT. Start creating exceptional content that captivates your audience and boosts your online presence today.",
  },
  {
    name: "KIT",
    logo: "kit.png",
    role: "Founder",
    year: 2022,
    text: "Markdown publishing framework, as a service !\n\nThe `kit` renders markdown into any kind of web application, and with the use of plugins and declarative syntax, you can customize every aspect of your pages, in seconds!\n\nhe kit renders your content into static HTML pages, inside a folder, that can be hosted anywhere.\n\nProject documentations, blogs, wikis, digital gardens, academia, table-top games, shops... The kit just seats on top of your content, and gives you full control over the UI & UX.",
  },
  {
    name: "Inmemori",
    logo: "inmemori.png",
    role: "CTO",
    year: 2017,
    text: " It started with an online safe space for families to organize and commemorate the loss of their loved ones. \n\nI've built the entire service from scratch. I architected and implemented custom software, enhancing (10x?) the funeral workflows, redefining the funeral business from the ground up. \n\n 5 years, 60 employees in & out, and a 20M€ B series later, the company extended its model to physical funeral services.",
  },
  {
    name: "Flooz",
    logo: "flooz.png",
    role: "Founder",
    year: 2014,
    text: "Fintech social wallet (like Venmo, but with EU regulation). 1M€ A series, 50k users and 3M€ exchanged as of today. We also infiltrated the gaming scene by creating the first donation Bot on twitch.tv",
  },
  {
    name: "Roadzila",
    logo: "roadzila.png",
    role: "CTO",
    year: 2013,
    text: "Roadzila is a European B2B tires marketplace. I'm proud of my tailor made catalog :) 700 brands over 80,000 references, with a total stock of around 15 millions tires. Roadzila uses bleeding edge technologies in its market, also it's currently the only company providing a standard HTTP API consumed by major international tires manufacturers and brokers.",
  },
  {
    name: "Kalio",
    logo: "kalio.png",
    role: "Founder",
    year: 2013,
    text: "Kal.io (for calendar) is a dead simple visual time scheduler where you can seamlessly book resources and assign them to other shared resources. UX is the primary goal of this project, and the calendar is designed to render on very small devices. Kalio is mainly used by flight schools.\n\n It's so easy that pilots can safely book planes on their phones while flying the aircraft :) (tested myself)",
  },
  {
    name: "Edoki Academy",
    logo: "sevenacademy.png",
    role: "CTO",
    year: 2012,
    text: "Edoki Academy is a multilingual educational game platform. Kids learn from a variety of high quality ios apps developed in collaboration with experienced Montessori teachers. Game levels, scores and stats are centralized in real time and parents can follow their kid's progression.",
  },
];
const Portfolio = () => {
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    console.log(data);
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          // layoutMode: "fitRows",
        });
      }, 3000);
    }

    // return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour(item) {
    return () => setIsOpen4(isOpen4 ? false : item);
  }
  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail item={isOpen4} toggleModalFour={toggleModalFour(isOpen4)} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Creative Portfolio
              </span>
            </div>
            {/* <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="current text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".vimeo"
                    onClick={handleFilterKeyChange("vimeo")}
                  >
                    Vimeo
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("youtube")}
                  >
                    Youtube
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".soundcloud"
                    onClick={handleFilterKeyChange("soundcloud")}
                  >
                    Soundcloud
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".image"
                    onClick={handleFilterKeyChange("image")}
                  >
                    Image
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className="text-[#333] font-poppins font-medium transition-all duration-300"
                    data-filter=".detail"
                    onClick={handleFilterKeyChange("detail")}
                  >
                    Detail
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="portfolio_list w-full h-auto clear-both float-left mt-10 sm:mt-20">
              <ul className="gallery_zoom ml-[-50px]">
                {folio.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="detail mb-[50px] w-1/2 float-left pl-[50px] item__"
                    >
                      <div className=" w-full h-auto clear-both float-left relative overflow-hidden">
                        <div className="image relative">
                          <img
                            className="relative opacity-0 min-w-full"
                            src="assets/img/thumbs/1-1.jpg"
                            alt
                          />
                          <div
                            className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                            data-img-url={`assets/img/portfolio/${item.logo}`}
                          />
                          <a
                            className="cavani_tm_full_link portfolio_popup"
                            href="#"
                            onClick={toggleModalFour(item)}
                          />
                        </div>
                        <div className="p-5">
                          <a
                            className=""
                            href="#"
                            onClick={toggleModalFour(item)}
                          >
                            <h3 className="mb-[2px] font-semibold">
                              {item.name}
                            </h3>
                            <div className="text-[14px]">
                              {item.role} ~ {item.year}
                            </div>
                          </a>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Fragment>
  );
};
export default Portfolio;
