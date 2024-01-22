"use client";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative w-full min-h-screen flex justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline // Add this
        preload="auto" // Add this
        className="absolute z-0 w-auto min-w-full min-h-screen max-w-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <source src="/solar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative min-h-screen mt-10 w-full px-6 md:px-12 max-w-screen-xl z-10 flex justify-center items-center text-center">
        <div className=" max-w-screen-md w-full">
          <h1
            className="text-4xl md:text-[54px] leading-tight  md:leading-[66px] text-white text-center font-[500]"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            {t("hero.title")}
          </h1>
          <p className="text-sm font-[400] md:text-md mt-5 pr-0 lg:pr-3  text-white leading-relaxed tracking-wide text-center">
            {t("hero.description")}
          </p>
          <a href="#contact" className="mx-auto">
            <button className="bg-white mt-9 mx-auto lg:mx-0 text-green rounded-md cursor-pointer font-medium py-3 px-8 transition ease-in-out duration-150">
              {t("hero.cta")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
