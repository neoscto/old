"use client";
import { useTranslation } from "react-i18next";
import Table from "./Table";

export default function Comparison() {
  const { t } = useTranslation();
  return (
    <div className="mt-24 md:mt-36" id="comparison">
      <h4 className="text-center font-[500] mx-5">{t("table.title")}</h4>
      <h3 className="text-2xl md:text-4xl text-center font-semibold mt-6 mx-5">
        {t("table.subtitle")}
      </h3>
      <Table />
    </div>
  );
}
