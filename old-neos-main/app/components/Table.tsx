"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Table() {
  const { t } = useTranslation();
  const data = [
    { label: t("table.labels.first"), icons: ["x", "x", "check"] },
    { label: t("table.labels.second"), icons: ["check", "x", "check"] },
    { label: t("table.labels.third"), icons: ["check", "x", "check"] },
    {
      label: t("table.labels.fourth"),
      icons: ["check", "x", "check"],
    },
    { label: t("table.labels.fifth"), icons: ["x", "check", "check"] },
    {
      label: t("table.labels.sixth"),
      icons: ["x", "check", "check"],
    },
  ];

  return (
    <div className="w-full justify-center items-center mt-14 text-white">
      <div className="rounded-2xl relative bg-green p-4 py-10 md:p-10 mx-auto w-full max-w-screen-xl">
        <div className="flex">
          <div className="flex-grow">
            {/* Table Wrapper */}
            <div className="relative overflow-hidden">
              {/* White Background for Last Column */}

              {/* Headers */}
              <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-2 items-center pb-4 mb-5 sm:px-5 z-40">
                <span className="text-left"></span>
                {[
                  t("table.titles.first"),
                  t("table.titles.second"),
                  "Neos",
                ].map((title) => (
                  <div
                    className="flex justify-center items-center relative"
                    key={title}
                  >
                    <div className="w-auto h-auto">
                      <span className="text-center text-xs sm:text-base py-2 px-2 sm:px-5 bg-[#FEF8E5] text-green rounded-lg block font-[500]">
                        {title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data rows */}
              {data.map((row, index) => (
                <div
                  key={index}
                  className={`grid z-20 grid-cols-[2fr,1fr,1fr,1fr] gap-5 items-center py-5 sm:py-7 sm:px-5 ${
                    index !== data.length - 1
                      ? "border-b-[1px] border-[#224f44]"
                      : ""
                  }`}
                >
                  {/* White Background for Last Column */}
                  <div className="absolute top-16 right-0 sm:right-5 md:right-6 lg:right-7 rounded-xl bottom-0 w-1/6 bg-transparent border md:border-2 border-white z-[1]"></div>
                  {/* <div className="absolute top-16 right-0 sm:right-5 md:right-6 lg:right-7 rounded-xl bottom-0 w-1/6 bg-transparent bg-[#FFFDF7] z-[1]"></div> */}

                  <span className="z-20 text-left text-xs sm:text-base">
                    {row.label}
                  </span>
                  {row.icons.map((icon, i) => (
                    <div
                      key={i}
                      className="z-20 flex justify-center items-center "
                    >
                      <div className="w-1/6 flex justify-center">
                        <Image
                          src={`/${icon}.png`}
                          width={25}
                          height={25}
                          alt={icon}
                          className={`${
                            icon != "x" && "bg-white "
                          } z-20 rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
