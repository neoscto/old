"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import LanguageSelect from "./LanguageSelect";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const linkList = [
    { href: "/", title: t("nav.one") },
    { href: "#savings", title: t("nav.two") },
    { href: "#comparison", title: t("nav.three") },
    { href: "#blog", title: "Blog" },
  ];

  useEffect(() => {
    isOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="fixed z-[60] w-full bg-green">
      <div className="max-w-screen-xl w-full mx-auto lg:py-5 lg:px-6 flex items-center justify-between">
        <div className="flex lg:ml-4 w-full lg:w-auto h-full py-6 px-6 lg:py-0 lg:px-0 items-center justify-between bg-green lg:bg-transparent z-50">
          <div className="flex items-center justify-center">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={50}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center"
          >
            {isOpen ? (
              <Image src={"/close.svg"} width={30} height={30} alt="close" />
            ) : (
              <Image
                src={"/hamburger.svg"}
                width={30}
                height={30}
                alt="hamburger"
              />
            )}
          </button>
        </div>
        <div
          className={`fixed z-20 top-0 right-0 w-full h-full max-h-screen bg-green transform transition-transform duration-200 ease-in-out overflow-hidden ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } lg:static lg:translate-y-0 lg:bg-transparent lg:-mr-40 lg:w-auto lg:h-auto lg:flex lg:items-center lg:gap-6`}
        >
          <div className="flex h-full relative flex-col items-center justify-center">
            <ul className="flex flex-col justify-center items-center text-4xl w-full h-full gap-6 lg:flex-row lg:text-base lg:justify-start lg:items-center">
              {linkList.map((link, index) => (
                <li className="cursor-pointer text-white">
                  <a href={link.href} onClick={() => setIsOpen(false)}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="absolute top-20 left-1/2 transform -translate-x-1/2  w-full max-w-xs z-50 lg:hidden">
              <LanguageSelect />
            </div>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2  w-full max-w-xs text-center z-50 bg-white text-green border rounded-md cursor-pointer border-green hover:border-white hover:bg-green hover:text-white transition-all py-3 px-5 lg:hidden">
                {t("nav.cta")}
              </div>
            </a>
          </div>
        </div>
        <div className="hidden lg:flex justify-center gap-4 items-center">
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <div className="bg-white text-green border rounded-md cursor-pointer border-green hover:border-white hover:bg-green hover:text-white transition-all py-3 px-3">
              {t("nav.cta")}
            </div>
          </a>
          <LanguageSelect />
        </div>
      </div>
    </nav>
  );
}
