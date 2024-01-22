"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export function Calculator() {
  const { t } = useTranslation();
  return (
    <div className="col-span-1 w-full lg:pr-10">
      <h3 className="text-2xl md:text-4xl font-semibold text-green mb-8 text-center lg:text-start">
        {t("calculator.title")}
      </h3>
      <div className="bg-green w-full max-w-[510px] mx-auto lg:mx-0 rounded-2xl p-7 py-8">
        <p className="font-[500] text-sm md:text-base leading-relaxed text-[17px] tracking-wide">
          {t("calculator.subtitle")}
        </p>

        <DataBox value="36%" label={t("calculator.one")} />
        <DataBox value="72%" label={t("calculator.two")} />
        <DataBox value="100%" label={t("calculator.three")} />
      </div>
    </div>
  );
}

const DataBox = ({ value, label }: { value: any; label: any }) => (
  <div className="flex mt-6 items-center">
    <div className="flex-shrink-0 h-20 w-32 min-w-32 max-w-32 min-h-20 max-h-20 border border-[#1e4739] p-2 rounded-lg">
      <div className="bg-[#1e4739] w-full h-full rounded-lg flex items-center justify-center">
        <span className="text-base md:text-xl font-[400]">{value}</span>
      </div>
    </div>
    <h4 className="text-sm md:text-base ml-6">{label}</h4>
  </div>
);
