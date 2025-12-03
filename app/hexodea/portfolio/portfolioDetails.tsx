import { useState } from "react";
import { IPhoneMockup } from "react-device-mockup";

export default function PortfolioDetails({
  params,
}: {
  params: { portfolioId: string };
}) {
  const [src, setSrc] = useState("/assets/about/image1.png");
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-5 gap-8">
        <div className="h-full">
          <img
            onClick={() => setSrc("/assets/about/image1.png")}
            src="/assets/about/image1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            onClick={() => setSrc("/assets/about/image2.png")}
            src="/assets/about/image2.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center">
          <IPhoneMockup
            screenWidth={250}
            frameColor={"#000000"}
            frameOnly
            hideStatusBar
            hideNavBar
          >
            <img src={src} alt="" />
          </IPhoneMockup>
        </div>
        <div>
          <img
            onClick={() => setSrc("/assets/about/image3.png")}
            src="/assets/about/image3.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <img
            onClick={() => setSrc("/assets/about/image4.png")}
            src="/assets/about/image4.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
