import { Fragment, useContext, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CavaniContext } from "../Context";

const navs = [
  { id: 1, name: "Home", href: "home" },
  { id: 2, name: "About", href: "about" },
  { id: 3, name: "Portfolio", href: "portfolio" },
  // { id: 4, name: "Service", href: "service" },
  // { id: 5, name: "News", href: "news" },
  { id: 6, name: "Contact", href: "contact" },
];

const Header = () => {
  const { navChange, nav: activeNav } = useContext(CavaniContext);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      <div className="cavani_tm_topbar fixed top-0 left-0 right-0 h-[70px] bg-white z-[15] hidden middle:block">
        <div className="topbar_inner w-full h-full clear-both flex items-center justify-between py-0 px-[20px]">
        <a className="image" href="#">
            <img
              className="inline-block"
              src="assets/img/logo/logo.svg"
              alt="image"
              width={110}
            />
          </a>
          <div className="trigger relative top-[5px] right-5">
            <div
              className={`hamburger hamburger--slider ${
                toggle ? "is-active" : ""
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`cavani_tm_mobile_menu fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-white transition-all duration-300 ${
          toggle ? "opened" : ""
        }`}
      >
        <div className="inner relative w-full h-full text-right px-[20px] pt-[70px] pb-[20px]">
          <div className="wrapper">
            
            <div className="menu_list w-full h-auto clear-both float-left mb-[50px]">
              <ul className="transition_link">
                {navs.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      activeNav == nav.href ? "active" : ""
                    } mb-[7px] py-2`}
                  >
                    <a
                      onClick={() => {
                        navChange(nav.href);
                        setToggle(false);
                      }}
                      className="text-[#333] font-poppins text-xl"
                      href={`#${nav.href}`}
                    >
                      {nav.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="social w-full float-left mb-[5px]">
              {/* <ul>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/facebook.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/twitter.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/instagram.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="mr-[8px] inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/dribbble.svg"
                      alt="image"
                    />
                  </a>
                </li>
                <li className="inline-block">
                  <a className="text-[#333]" href="#">
                    <img
                      className="svg"
                      src="assets/img/svg/social/tik-tok.svg"
                      alt="image"
                    />
                  </a>
                </li>
              </ul> */}
            </div>
            <div className="copyright w-full float-left">
              <p className="text-[#333] font-poppins">Copyright © 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cavani_tm_header fixed top-0 left-0 right-0 h-[70px] leading-[70px] bg-white z-[10] flex items-center justify-between py-0 px-[70px] middle:hidden">
        <div className="logo" data-type="image">
          {" "}
          {/* You can use text or image as logo. data-type values are: "image" and "text"  */}
          <a className="image" href="#">
            <img
              className="inline-block"
              src="assets/img/logo/logo.svg"
              alt="image"
              width={110}
            />
          </a>
        
        </div>
        <div className="menu relative">
          <ul className="transition_link">
            {navs.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  activeNav == nav.href ? "active" : ""
                } float-left`}
              >
                <a
                  onClick={() => navChange(nav.href)}
                  className="text-[#333] font-poppins font-medium py-0 px-[30px] inline-block transition-all duration-300"
                  href={`#${nav.href}`}
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
          <span className="ccc absolute block top-[15px] bottom-[15px] bg-[#333] z-[-1] transition-all duration-500" />
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
