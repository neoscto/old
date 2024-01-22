"use client";
import { useTranslation } from "react-i18next";
import { Process } from "./Process";

import React from "react";

type Props = {};

export default function Mentions({}: Props) {
  const { t } = useTranslation();
  return (
    <div className="max-w-screen-xl z-50 w-full mx-auto md:px-12">
      <div className="bg-[#FEFAEE] w-full max-w-screen-xl mx-auto px-2 py-16 mt-24 lg:mt-16 z-50 flex items-center justify-center flex-col">
        <h3 className="font-semibold text-green text-2xl mb-6">
          {t("mentions")}
        </h3>

        <div className="flex items-center justify-between w-full mx-auto">
          <img
            src={"/mention1.png"}
            alt="dfs"
            className="w-1/3 px-2 sm:px-5 md:px-10 lg:px-16 xl:px-20 object-contain"
          />
          <img
            src={"/mention2.png"}
            alt="dfs"
            className="w-1/3 px-2 sm:px-5 md:px-10 lg:px-16 xl:px-20 object-contain"
          />
          <img
            src={"/mention3.png"}
            alt="dfs"
            className="w-1/3 px-2 sm:px-5 md:px-10 lg:px-16 xl:px-20 object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center justify-center px-5 mt-24 md:mx-10">
        <h2 className="text-2xl md:text-4xl font-semibold">
          {t("process.title")}
        </h2>
        <p className="max-w-xl text-sm text-[#454545] text-center mt-5">
          {t("process.subtitle")}
        </p>
      </div>

      <div
        className="flex flex-col items-center justify-center mt-20 px-14 md:px-20 sm:mx-5 md:mx-20"
        id="savings"
      >
        <Process />

        <a href="#contact" className="mx-auto">
          <div className="bg-green mt-24 md:mt-20 mx-auto text-white border rounded-md cursor-pointer border-green hover:bg-white hover:text-green transition-all py-3 px-5">
            {t("hero.cta")}
          </div>
        </a>
      </div>
    </div>
  );
}
