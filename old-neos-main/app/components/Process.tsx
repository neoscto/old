"use client";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export function Process() {
  const { t } = useTranslation();

  function insertBreaks(text: string) {
    const words = text.split(" ");

    switch (words.length) {
      case 2:
        return `${words[0]}<br className="block md:hidden" /> ${words[1]}`;
      case 3:
        return `${words[0]}<br className="block md:hidden" /> ${words[1]} ${words[2]}`;
      case 4:
        return `${words[0]} ${words[1]}<br className="block md:hidden" /> ${words[2]} ${words[3]}`;
      default:
        return text;
    }
  }

  return (
    <div className="relative bg-[#bfbfbf] h-[5px] w-full mb-12">
      {/* Green Line */}
      <div
        className="absolute bg-green h-[5px] -top-0"
        style={{ animation: "growLine 10s infinite" }}
      ></div>

      {/* First Dot */}
      <div
        className="absolute left-0 transform -translate-x-1/2 z-10 rounded-full w-16 h-16 -top-7 flex items-center justify-center dot1"
        style={{ animation: "dot1ColorChange 10s infinite" }}
      >
        <Image src={"/calculator.png"} width={30} height={30} alt="icon" />
      </div>

      <div className="absolute left-0 transform -translate-x-1/2 top-12 md:top-14 text-center">
        <h3
          className="font-[500] text-sm md:text-base dotText1"
          dangerouslySetInnerHTML={{
            __html: insertBreaks(t("process.processes.one")),
          }}
        ></h3>
      </div>

      {/* Second Dot */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 z-10 rounded-full w-16 h-16 -top-7 flex items-center justify-center dot2"
        style={{ animation: "dot2ColorChange 10s infinite" }}
      >
        <Image src={"/person.png"} width={25} height={25} alt="icon" />
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-12 md:top-14 text-center">
        <h3
          className="font-[500] text-sm md:text-base dotText2 max-w-xs"
          dangerouslySetInnerHTML={{
            __html: insertBreaks(t("process.processes.two")),
          }}
        ></h3>
      </div>

      {/* Third Dot */}
      <div
        className="absolute right-0 transform translate-x-1/2 z-10 rounded-full w-16 h-16 -top-7 flex items-center justify-center dot3"
        style={{ animation: "dot3ColorChange 10s infinite" }}
      >
        <Image src={"/hand.png"} width={30} height={30} alt="icon" />
      </div>
      <div className="absolute right-0 transform translate-x-1/2 top-12 md:top-14 text-center">
        <h3
          className="font-[500] text-sm md:text-base dotText3 max-w-xs"
          dangerouslySetInnerHTML={{
            __html: insertBreaks(t("process.processes.three")),
          }}
        ></h3>
      </div>
    </div>
  );
}
