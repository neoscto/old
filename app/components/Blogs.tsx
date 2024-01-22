"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Blogs() {
  const { t } = useTranslation();
  return (
    <div className="mt-24 md:mt-36 pb-32" id="blog">
      <h4 className="text-center font-[600] text-[#007291]">Blog</h4>
      <h3 className="text-2xl md:text-4xl text-center font-semibold mt-6 mx-5">
        {t("blogs")}
      </h3>

      <div className="mt-6 lg:mt-12 flex flex-col md:flex-row justify-between items-center gap-12 mx-auto w-full max-w-screen-xl px-5 md:px-20">
        <div className="flex flex-col justify-start w-full">
          <Link
            href={
              "/blog/From-Zero-to-Hero-The-Path-to-Net-Zero-Carbon-and-the-Power-of-Renewable-Energy"
            }
          >
            <Image
              src={"/blogs/dam.jpeg"}
              alt="blog"
              width={600}
              height={300}
              className=" rounded-2xl w-full"
            />
            <p className="font-semibold mt-5">
              From Zero to Hero: The Path to Net-Zero Carbon...
            </p>
            <span className="text-[#007291] mt-1">Climate Journey</span>
          </Link>
        </div>
        <div className="flex flex-col justify-start w-full">
          <Link
            href={
              "/blog/Leaving-a-Green-Legacy-The-Individuals-Role-in-Combatting-Climate-Change"
            }
          >
            <Image
              src={"/blogs/plant.jpeg"}
              alt="blog"
              width={600}
              height={300}
              className=" rounded-2xl w-full"
            />
            <p className="font-semibold mt-5">
              Leaving a Green Legacy: The Individual's Role...
            </p>
            <span className="text-[#007291] mt-1">Green Advocacy</span>
          </Link>
        </div>
        <div className="flex flex-col justify-start w-full">
          <Link
            href={"/blog/Traveling-Light-Daily-Choices-for-a-Cooler-Planet"}
          >
            <Image
              src={"/blogs/bike.jpeg"}
              alt="blog"
              width={600}
              height={300}
              className=" rounded-2xl w-full"
            />
            <p className="font-semibold mt-5">
              Traveling Light: Daily Choices for a Cooler Planet
            </p>
            <span className="text-[#007291] mt-1">Eco Habits</span>
          </Link>
        </div>
      </div>
      {/* <div className="bg-green mt-5 md:mt-10 mx-auto max-w-max text-white border rounded-md cursor-pointer border-green hover:bg-white hover:text-green transition-all py-3 px-5">
        View more
      </div> */}
    </div>
  );
}
