"use client";
import { useTranslation } from "react-i18next";
import { Calculator } from "../Calculator";
import Item from "./Item";

export default function Advantages() {
  const { t } = useTranslation();
  const items = [
    {
      icon: "/icons/chart.png",
      title: t("advantages.options.one"),
    },
    {
      icon: "/icons/check.png",
      title: t("advantages.options.two"),
    },
    {
      icon: "/icons/x.png",
      title: t("advantages.options.three"),
    },
    {
      icon: "/icons/hand.png",
      title: t("advantages.options.four"),
    },
  ];
  return (
    <div className="mt-24 md:mt-36 text-white mx-auto relative grid grid-cols-1 px-4 md:px-12 lg:px-20 lg:grid-cols-2 w-full max-w-screen-xl">
      <Calculator />
      <div className="relative col-span-1 w-full text-green mt-24 lg:mt-0">
        <h3 className="text-2xl md:text-4xl font-semibold text-green mb-7 text-center lg:text-start">
          {t("advantages.title")}
        </h3>
        <p className="mt-3 font-[300] text-sm md:text-base text-center lg:text-start">
          {t("advantages.subtitle")}
        </p>

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          {items.map((item: any, index) => (
            <Item key={index} title={item.title} icon={item.icon} />
          ))}
        </ul>

        <a
          href="#contact"
          className="mx-auto relative lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2"
        >
          <div className="bg-green mt-6 text-center mx-auto w-max text-white border rounded-md cursor-pointer border-green hover:bg-white hover:text-green transition-all py-3 px-5">
            {t("hero.cta")}
          </div>
        </a>
      </div>
    </div>
  );
}
