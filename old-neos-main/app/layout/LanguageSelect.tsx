import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DropdownLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("es");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "es", label: "Spanish", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "pt", label: "Portuguese", flag: "🇵🇹" },
  ];

  const handleLangChange = (langCode: string) => {
    setLanguage(langCode);
    i18n.changeLanguage(langCode);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full lg:w-40">
      <button
        className="bg-[#0f3b2c] outline-none text-white text-center border rounded-md cursor-pointer border-[#59766A] py-3 px-3 w-full lg:w-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1">
          {languages.find((lang) => lang.code === language)?.flag}
        </span>
        {languages.find((lang) => lang.code === language)?.label}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full lg:w-40 bg-[#0f3b2c] border rounded-md border-[#59766A] shadow-lg z-10">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="text-white text-center py-2 px-3 hover:bg-[#1d5547] rounded-md cursor-pointer"
              onClick={() => handleLangChange(lang.code)}
            >
              <span className="mr-1">{lang.flag}</span> {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
