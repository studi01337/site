import CavaniState from "@/src/Context";
import CavaniHead from "@/src/layout/CavaniHead";

import "@/public/assets/css/animation.css";
import "@/public/assets/css/base.css";
import "@/public/assets/css/cdheadline.css";
import "@/public/assets/css/fontello.css";
import "@/public/assets/css/hamburgers.css";

// import "@/public/assets/css/owltheme.css";
// import "@/public/assets/css/magnificpopup.css";
// import "@/public/assets/css/owlcarousel.css";
import "@/public/assets/css/custom.css";
import "@/public/assets/css/main.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <CavaniState>
      <CavaniHead />
      <Component {...pageProps} />
    </CavaniState>
  );
}
