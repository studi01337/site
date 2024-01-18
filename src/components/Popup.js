import Modal from "react-modal";
import { Nl2br } from "@/src/utils.js"

export const Soundcloud = ({ isOpen3, toggleModalThree }) => {
  return (
    <Modal
      isOpen={isOpen3}
      onRequestClose={toggleModalThree}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      {" "}
      <div
        onClick={toggleModalThree}
        className="modal-video mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready"
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div className="mfp-container mfp-s-ready mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <button
                onClick={toggleModalThree}
                title="Close (Esc)"
                type="button"
                className="mfp-close"
              >
                ×
              </button>
              <iframe
                className="mfp-iframe"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
          <div className="mfp-preloader">Loading...</div>
        </div>
      </div>
    </Modal>
  );
};
export const Detail = ({ item, toggleModalFour }) => {
  return (
    <Modal
      isOpen={!!item}
      onRequestClose={toggleModalFour}
      contentLabel="My dialog"
      className="mymodal"
      overlayClassName="myoverlay"
      closeTimeoutMS={300}
      openTimeoutMS={300}
    >
      {item && (
        <div className="cavani_tm_modalbox opened">
          <div className="box_inner">
            <div className="close">
              <a href="#" onClick={toggleModalFour}>
                <i className="icon-cancel" />
              </a>
            </div>
            <div className="description_wrap">
              <div className="popup_details w-full h-auto clear-both float-left">
                <div className="top_image">
                  <img src="assets/img/thumbs/4-2.jpg" alt="image" />
                  <div
                    className="main"
                    data-img-url={`assets/img/portfolio/${item.logo}`}
                    style={{
                      backgroundImage: `url(assets/img/portfolio/${item.logo})`,
                    }}
                  />
                </div>
                <div className="portfolio_main_title">
                  <h3 className="text-[16px] mb-[2px] font-semibold">
                    {item && item.name}
                  </h3>
                  <div />
                </div>
                <div className="main_details w-full h-auto clear-both flex">
                  <div className="textbox w-[70%] pr-[40px] break-all">
                    <Nl2br value={item.text} />
                  </div>
                  <div className="detailbox w-[30%] pl-[40px]">
                    <ul>
                      <li className="mb-[10px] w-full float-left">
                        <span className="first font-bold block">Role</span>
                        <span>{item.role}</span>
                      </li>
                      <li className="mb-[10px] w-full float-left">
                        <span className="first font-bold block">Date</span>
                        <span>{item.year}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};
